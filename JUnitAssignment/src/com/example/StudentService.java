package com.example;

public class StudentService {
    private StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public String getStudentNameById(int id) {
        Student student = repository.findById(id);
        return student != null ? student.getName() : null;
    }
}