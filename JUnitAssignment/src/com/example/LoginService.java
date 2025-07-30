package com.example;

public class LoginService {
    public boolean validate(String username, String password) {
        return username != null && password != null && username.equals("admin") && password.equals("password");
    }
}