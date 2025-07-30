package com.example;

public class AccountService {
    private AccountRepository repository;
    private NotificationService notificationService;

    public AccountService(AccountRepository repository, NotificationService notificationService) {
        this.repository = repository;
        this.notificationService = notificationService;
    }

    public boolean transfer(int fromId, int toId, double amount) {
        Account from = repository.findById(fromId);
        Account to = repository.findById(toId);
        if (from == null || to == null) return false;
        if (from.getBalance() < amount) return false;

        from.setBalance(from.getBalance() - amount);
        to.setBalance(to.getBalance() + amount);
        repository.update(from);
        repository.update(to);
        notificationService.send("Transfer of " + amount + " completed.");
        return true;
    }
}