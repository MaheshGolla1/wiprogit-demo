package com.Questions_Services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan(basePackages = {"com"})

public class QuestionsServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestionsServicesApplication.class, args);
	}

}
