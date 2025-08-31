package com.healthcare.wellness.service;

import com.healthcare.wellness.dto.AuthRequest;
import com.healthcare.wellness.dto.AuthResponse;
import com.healthcare.wellness.dto.PatientRegistrationRequest;
import com.healthcare.wellness.entity.Patient;
import com.healthcare.wellness.entity.User;
import com.healthcare.wellness.repository.PatientRepository;
import com.healthcare.wellness.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final PatientRepository patientRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    
    public AuthResponse register(PatientRegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        
        Patient patient = Patient.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .address(request.getAddress())
                .dateOfBirth(request.getDateOfBirth())
                .gender(request.getGender())
                .emergencyContact(request.getEmergencyContact())
                .build();
        
        Patient savedPatient = patientRepository.save(patient);
        
        String jwtToken = jwtService.generateToken(savedPatient);
        
        return AuthResponse.builder()
                .token(jwtToken)
                .email(savedPatient.getEmail())
                .name(savedPatient.getName())
                .role(savedPatient.getRole())
                .userId(savedPatient.getId())
                .build();
    }
    
    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        String jwtToken = jwtService.generateToken(user);
        
        return AuthResponse.builder()
                .token(jwtToken)
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
                .userId(user.getId())
                .build();
    }
}
