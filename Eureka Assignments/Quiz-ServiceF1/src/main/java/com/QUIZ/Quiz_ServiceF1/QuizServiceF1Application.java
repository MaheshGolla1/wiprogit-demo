package com.QUIZ.Quiz_ServiceF1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.QUIZ.Quiz_ServiceF1.Feign")
public class QuizServiceF1Application {

	public static void main(String[] args) {
		SpringApplication.run(QuizServiceF1Application.class, args);
	}

}
