
package com.example.mock;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.service.Student;
import com.example.service.StudentRepository;
import com.example.service.StudentService;

import org.junit.jupiter.api.Test;

public class StudentServiceTest {

    @Test
    void testGetStudentById() {
        StudentRepository mockRepo = mock(StudentRepository.class);
        Student dummy = new Student(1, "Alice");
        when(mockRepo.findById(1)).thenReturn(dummy);

        StudentService service = new StudentService(mockRepo);
        assertEquals("Alice", service.getStudentById(1).getName());
    }
}
