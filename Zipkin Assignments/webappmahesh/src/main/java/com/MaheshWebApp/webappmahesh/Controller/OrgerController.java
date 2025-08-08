package com.MaheshWebApp.webappmahesh.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/order")
 class OrderController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public String placeOrder() {
        String response = restTemplate.getForObject("http://localhost:8082/payment", String.class);
        return "🛒 Order placed! " + response;
    }
}
