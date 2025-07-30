package com.example;

public interface AccountRepository {
    Account findById(int id);
    void update(Account account);
}