package com.healthcare.wellness.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "providers")
public class Provider extends User {
    
    @Column(name = "specialization")
    private String specialization;
    
    @Column(name = "license_number")
    private String licenseNumber;
    
    @Column(name = "experience_years")
    private Integer experienceYears;
    
    @Column(name = "qualification")
    private String qualification;
    
    @Column(name = "bio", columnDefinition = "TEXT")
    private String bio;
    
    @Column(name = "is_available")
    private Boolean isAvailable = true;
    
    @Column(name = "consultation_fee")
    private Double consultationFee;
    
    @Column(name = "working_hours")
    private String workingHours;
    
    // Constructors
    public Provider() {
        super();
        setRole(UserRole.PROVIDER);
    }
    
    public Provider(String name, String email, String password, String phone, 
                    String specialization, String licenseNumber, Integer experienceYears) {
        super(name, email, password, phone, UserRole.PROVIDER);
        this.specialization = specialization;
        this.licenseNumber = licenseNumber;
        this.experienceYears = experienceYears;
    }
    
    // Getters and Setters
    public String getSpecialization() {
        return specialization;
    }
    
    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
    
    public String getLicenseNumber() {
        return licenseNumber;
    }
    
    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }
    
    public Integer getExperienceYears() {
        return experienceYears;
    }
    
    public void setExperienceYears(Integer experienceYears) {
        this.experienceYears = experienceYears;
    }
    
    public String getQualification() {
        return qualification;
    }
    
    public void setQualification(String qualification) {
        this.qualification = qualification;
    }
    
    public String getBio() {
        return bio;
    }
    
    public void setBio(String bio) {
        this.bio = bio;
    }
    
    public Boolean getIsAvailable() {
        return isAvailable;
    }
    
    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
    
    public Double getConsultationFee() {
        return consultationFee;
    }
    
    public void setConsultationFee(Double consultationFee) {
        this.consultationFee = consultationFee;
    }
    
    public String getWorkingHours() {
        return workingHours;
    }
    
    public void setWorkingHours(String workingHours) {
        this.workingHours = workingHours;
    }
}
