
package com.example.mock;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.service.Account;
import com.example.service.AccountRepository;
import com.example.service.NotificationService;
import com.example.service.AccountService;

import org.junit.jupiter.api.Test;

public class AccountServiceTest {

    @Test
    void testSuccessfulTransfer() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);
        Account from = new Account(1, 1000);
        Account to = new Account(2, 500);
        when(repo.findById(1)).thenReturn(from);
        when(repo.findById(2)).thenReturn(to);

        AccountService service = new AccountService(repo, notifier);
        service.transfer(1, 2, 200);

        assertEquals(800, from.getBalance());
        assertEquals(700, to.getBalance());
        verify(repo, times(2)).update(any(Account.class));
        verify(notifier, times(1)).send("Transferred 200 from 1 to 2");
    }

    @Test
    void testInsufficientBalance() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);
        Account from = new Account(1, 100);
        Account to = new Account(2, 500);
        when(repo.findById(1)).thenReturn(from);
        when(repo.findById(2)).thenReturn(to);

        AccountService service = new AccountService(repo, notifier);
        assertThrows(IllegalArgumentException.class, () -> service.transfer(1, 2, 200));
    }

    @Test
    void testMissingAccount() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notifier = mock(NotificationService.class);
        when(repo.findById(1)).thenReturn(null);

        AccountService service = new AccountService(repo, notifier);
        assertThrows(IllegalArgumentException.class, () -> service.transfer(1, 2, 100));
    }
}
