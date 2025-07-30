
package com.example.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class DivideTest {
    public int divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Divide by zero");
        return a / b;
    }

    @Test
    void testDivideByZero() {
        assertThrows(IllegalArgumentException.class, () -> divide(5, 0));
    }
}
