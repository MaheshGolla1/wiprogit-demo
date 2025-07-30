
package com.example.mock;

import static org.mockito.Mockito.*;

import com.example.service.OrderService;
import com.example.service.PaymentService;

import org.junit.jupiter.api.Test;

public class OrderServiceTest {

    @Test
    void testPlaceOrderCallsPaymentOnce() {
        PaymentService mockPayment = mock(PaymentService.class);
        OrderService orderService = new OrderService(mockPayment);
        orderService.placeOrder();
        verify(mockPayment, times(1)).processPayment();
    }
}
