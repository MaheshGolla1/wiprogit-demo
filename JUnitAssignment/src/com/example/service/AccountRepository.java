
package com.example.service;

public interface AccountRepository {
    Account findById(int id);
    void update(Account acc);
}
