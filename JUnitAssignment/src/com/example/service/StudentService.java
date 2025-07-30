
package com.example.service;

public class StudentService {
    private StudentRepository repo;
    public StudentService(StudentRepository repo) { this.repo = repo; }
    public Student getStudentById(int id) { return repo.findById(id); }
}
