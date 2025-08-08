package com.MaheshWebApp.webappmahesh;

import com.MaheshWebApp.webappmahesh.Service.ProductService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.MaheshWebApp.webappmahesh.Repository")
@EntityScan(basePackages = {"com"})
public class WebappmaheshApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext context= SpringApplication.run(WebappmaheshApplication.class, args);
		ProductService p=context.getBean(ProductService.class);//NO XML FILE, NO BEAN ID!
		p.getProducts();
	}
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
