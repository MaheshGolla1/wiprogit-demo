package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class FactorialCalculatorTest {
    @Test
    public void testFactorialValid() {
        assertEquals(120, FactorialCalculator.factorial(5));
    }
    @Test
    public void testFactorialNegative() {
        assertThrows(IllegalArgumentException.class, () -> FactorialCalculator.factorial(-1));
    }
}