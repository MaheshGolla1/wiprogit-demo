package com.example.uber.producer.service;

import com.example.uber.producer.model.RideMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;
    private final String TOPIC = "uber-ride-topic";

    public KafkaProducerService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = new ObjectMapper();
    }

    public void sendRideMessage(RideMessage rideMessage) {
        try {
            String payload = objectMapper.writeValueAsString(rideMessage);
            kafkaTemplate.send(TOPIC, payload);
            System.out.println("Produced message to topic: " + payload);
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize rideMessage", e);
        }
    }
}
