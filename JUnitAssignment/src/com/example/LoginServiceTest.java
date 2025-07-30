package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class LoginServiceTest {
    LoginService service = new LoginService();

    @Test
    public void testValidLogin() {
        assertTrue(service.validate("admin", "password"));
    }
    @Test
    public void testInvalidLogin() {
        assertFalse(service.validate("user", "pass"));
    }
}