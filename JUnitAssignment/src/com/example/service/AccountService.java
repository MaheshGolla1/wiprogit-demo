
package com.example.service;

public class AccountService {
    private AccountRepository repo;
    private NotificationService notifier;
    public AccountService(AccountRepository repo, NotificationService notifier) {
        this.repo = repo;
        this.notifier = notifier;
    }
    public void transfer(int fromId, int toId, int amount) {
        Account from = repo.findById(fromId);
        Account to = repo.findById(toId);
        if (from == null || to == null) throw new IllegalArgumentException("Account not found");
        if (from.getBalance() < amount) throw new IllegalArgumentException("Insufficient balance");
        from.withdraw(amount);
        to.deposit(amount);
        repo.update(from);
        repo.update(to);
        notifier.send("Transferred " + amount + " from " + fromId + " to " + toId);
    }
}
