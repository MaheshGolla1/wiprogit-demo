package com.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class AccountServiceTest {
    @Test
    public void testSuccessfulTransfer() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notify = mock(NotificationService.class);
        Account from = new Account(1, 500);
        Account to = new Account(2, 200);
        when(repo.findById(1)).thenReturn(from);
        when(repo.findById(2)).thenReturn(to);

        AccountService service = new AccountService(repo, notify);
        boolean result = service.transfer(1, 2, 100);

        assertTrue(result);
        assertEquals(400, from.getBalance());
        assertEquals(300, to.getBalance());
        verify(repo, times(2)).update(any());
        verify(notify, times(1)).send(anyString());
    }

    @Test
    public void testTransferInsufficientFunds() {
        AccountRepository repo = mock(AccountRepository.class);
        NotificationService notify = mock(NotificationService.class);
        Account from = new Account(1, 50);
        Account to = new Account(2, 200);
        when(repo.findById(1)).thenReturn(from);
        when(repo.findById(2)).thenReturn(to);

        AccountService service = new AccountService(repo, notify);
        assertFalse(service.transfer(1, 2, 100));
    }
}