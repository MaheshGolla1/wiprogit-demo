package com.healthcare.wellness.repository;

import com.healthcare.wellness.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {
    
    Optional<Provider> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    List<Provider> findBySpecialization(String specialization);
    
    List<Provider> findByIsAvailableTrue();
}
