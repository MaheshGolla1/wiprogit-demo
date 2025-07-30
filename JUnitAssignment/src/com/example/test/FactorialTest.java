
package com.example.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class FactorialTest {
    public int factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative not allowed");
        int result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }

    @Test
    void testFactorialValid() {
        assertEquals(120, factorial(5));
    }

    @Test
    void testFactorialZero() {
        assertEquals(1, factorial(0));
    }

    @Test
    void testFactorialNegative() {
        assertThrows(IllegalArgumentException.class, () -> factorial(-3));
    }
}
