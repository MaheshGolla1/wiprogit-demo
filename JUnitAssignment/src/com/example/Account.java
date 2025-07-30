package com.example;

public class Account {
    private int id;
    private double balance;

    public Account(int id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public int getId() { return id; }
    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }
}