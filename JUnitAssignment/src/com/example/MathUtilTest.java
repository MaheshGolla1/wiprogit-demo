package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class MathUtilTest {
    @Test
    public void testDivideByZero() {
        assertThrows(IllegalArgumentException.class, () -> MathUtil.divide(10, 0));
    }
}