package com.example.uber.consumer.repository;

import com.example.uber.consumer.entity.Ride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("rideRepositoryCustom")
public interface RideRepository extends JpaRepository<Ride, Long> {}
