package com.example.uber.producer.controller;

import com.example.uber.producer.model.RideMessage;
import com.example.uber.producer.service.KafkaProducerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final KafkaProducerService producer;

    public RideController(KafkaProducerService producer) {
        this.producer = producer;
    }

    // Create ride -> sends CREATE message
    @PostMapping
    public ResponseEntity<String> createRide(@RequestBody RideMessage request) {
        request.setOperation("CREATE");
        producer.sendRideMessage(request);
        return ResponseEntity.ok("Ride CREATE message sent to Kafka");
    }

    // Update ride -> sends UPDATE message (id in path)
    @PutMapping("/{id}")
    public ResponseEntity<String> updateRide(@PathVariable Long id, @RequestBody RideMessage request) {
        request.setOperation("UPDATE");
        request.setId(id);
        producer.sendRideMessage(request);
        return ResponseEntity.ok("Ride UPDATE message sent to Kafka");
    }

    // Delete ride -> sends DELETE message
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRide(@PathVariable Long id) {
        RideMessage msg = new RideMessage();
        msg.setOperation("DELETE");
        msg.setId(id);
        producer.sendRideMessage(msg);
        return ResponseEntity.ok("Ride DELETE message sent to Kafka");
    }

    // Optional: mock GET (DB lives in consumer)
    @GetMapping("/{id}")
    public ResponseEntity<String> getRideMock(@PathVariable Long id) {
        return ResponseEntity.ok("Request for ride " + id + " sent — consumer will handle DB.");
    }
}
