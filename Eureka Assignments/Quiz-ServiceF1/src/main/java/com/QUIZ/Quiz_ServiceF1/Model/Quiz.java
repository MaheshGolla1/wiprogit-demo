package com.QUIZ.Quiz_ServiceF1.Model;

import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name="quiz")
public class Quiz {
    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;

    public int getId() {
        return id;
    }

    public List<Integer> getQuestionIds() {
        return questionIds;
    }

    public void setQuestionIds(List<Integer> questionIds) {
        this.questionIds = questionIds;
    }

    @ElementCollection
    private List<Integer> questionIds;
}
