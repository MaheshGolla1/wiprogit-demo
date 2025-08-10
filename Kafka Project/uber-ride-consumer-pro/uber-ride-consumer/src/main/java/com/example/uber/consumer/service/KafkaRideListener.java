package com.example.uber.consumer.service;

import com.example.uber.consumer.dto.RideMessage;
import com.example.uber.consumer.entity.Ride;
import com.example.uber.consumer.repository.RideRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KafkaRideListener {

    private final RideRepository rideRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public KafkaRideListener(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    @KafkaListener(topics = "uber-ride-topic", groupId = "uber_ride_group")
    public void listen(String message) {
        try {
            RideMessage rideMsg = objectMapper.readValue(message, RideMessage.class);
            String operation = rideMsg.getOperation();
            System.out.println("Consumer received: " + message);

            switch (operation != null ? operation.toUpperCase() : "") {
                case "CREATE":
                    Ride newRide = new Ride();
                    newRide.setDriverName(rideMsg.getDriverName());
                    newRide.setPassengerName(rideMsg.getPassengerName());
                    newRide.setPickupLocation(rideMsg.getPickupLocation());
                    newRide.setDropLocation(rideMsg.getDropLocation());
                    newRide.setFare(rideMsg.getFare());
                    Ride saved = rideRepository.save(newRide);
                    System.out.println("Created ride id=" + saved.getId());
                    break;

                case "UPDATE":
                    Long updateId = rideMsg.getId();
                    if (updateId != null) {
                        Optional<Ride> opt = rideRepository.findById(updateId);
                        if (opt.isPresent()) {
                            Ride exist = opt.get();
                            if (rideMsg.getDriverName() != null) exist.setDriverName(rideMsg.getDriverName());
                            if (rideMsg.getPassengerName() != null) exist.setPassengerName(rideMsg.getPassengerName());
                            if (rideMsg.getPickupLocation() != null) exist.setPickupLocation(rideMsg.getPickupLocation());
                            if (rideMsg.getDropLocation() != null) exist.setDropLocation(rideMsg.getDropLocation());
                            if (rideMsg.getFare() != null) exist.setFare(rideMsg.getFare());
                            rideRepository.save(exist);
                            System.out.println("Updated ride id=" + updateId);
                        } else {
                            System.out.println("Ride not found for update id=" + updateId);
                        }
                    }
                    break;

                case "DELETE":
                    Long deleteId = rideMsg.getId();
                    if (deleteId != null) {
                        rideRepository.deleteById(deleteId);
                        System.out.println("Deleted ride id=" + deleteId);
                    }
                    break;

                default:
                    System.out.println("Unknown operation: " + operation);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
