
package com.example.service;

public class Account {
    private int id;
    private int balance;
    public Account(int id, int balance) { this.id = id; this.balance = balance; }
    public int getBalance() { return balance; }
    public void withdraw(int amt) { balance -= amt; }
    public void deposit(int amt) { balance += amt; }
}
