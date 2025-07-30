package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class StringUtilTest {
    @Test
    public void testReverseRegular() {
        assertEquals("dcba", StringUtil.reverse("abcd"));
    }
    @Test
    public void testReverseEmpty() {
        assertEquals("", StringUtil.reverse(""));
    }
    @Test
    public void testReverseNull() {
        assertNull(StringUtil.reverse(null));
    }
}