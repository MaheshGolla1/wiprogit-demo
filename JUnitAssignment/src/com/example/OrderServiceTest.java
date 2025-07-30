package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class OrderServiceTest {
    @Test
    public void testPlaceOrderCallsProcessPayment() {
        PaymentService paymentService = mock(PaymentService.class);
        OrderService service = new OrderService(paymentService);
        service.placeOrder();
        verify(paymentService, times(1)).processPayment();
    }
}