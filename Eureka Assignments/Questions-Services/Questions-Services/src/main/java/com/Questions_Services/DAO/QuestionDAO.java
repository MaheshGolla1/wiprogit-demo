package com.Questions_Services.DAO;

import com.Questions_Services.Model.QuizQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface QuestionDAO  extends JpaRepository<QuizQuestions, Integer> {

//List<QuizQuestions> findRandomQuestionsByCategory(String category, int num);

    //Collection<Object> findByCategory(String category);
    List<QuizQuestions> findByCategory(String category);  // ✅ returns the correct type


    int findAllByCorrect(String response);

    QuizQuestions findAllById(int id);
}

