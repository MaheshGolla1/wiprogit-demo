package com.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class StudentServiceTest {
    @Test
    public void testGetStudentById() {
        StudentRepository mockRepo = mock(StudentRepository.class);
        when(mockRepo.findById(1)).thenReturn(new Student(1, "John"));

        StudentService service = new StudentService(mockRepo);
        assertEquals("John", service.getStudentNameById(1));
    }
}