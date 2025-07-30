
package com.example.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class StringReverseTest {
    public String reverse(String s) {
        if (s == null) return null;
        return new StringBuilder(s).reverse().toString();
    }

    @Test
    void testNullInput() {
        assertNull(reverse(null));
    }

    @Test
    void testEmptyString() {
        assertEquals("", reverse(""));
    }

    @Test
    void testRegularString() {
        assertEquals("cba", reverse("abc"));
    }
}
