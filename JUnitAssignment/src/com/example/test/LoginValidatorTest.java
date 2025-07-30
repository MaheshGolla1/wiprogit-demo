
package com.example.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class LoginValidatorTest {
    public boolean validate(String username, String password) {
        if (username == null || password == null || username.isEmpty() || password.isEmpty()) return false;
        return username.equals("admin") && password.equals("pass123");
    }

    @Test
    void testCorrectCredentials() {
        assertTrue(validate("admin", "pass123"));
    }

    @Test
    void testEmptyUsername() {
        assertFalse(validate("", "pass123"));
    }

    @Test
    void testNullPassword() {
        assertFalse(validate("admin", null));
    }
}
