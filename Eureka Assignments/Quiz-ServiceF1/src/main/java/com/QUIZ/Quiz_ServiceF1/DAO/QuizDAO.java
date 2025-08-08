package com.QUIZ.Quiz_ServiceF1.DAO;

import com.QUIZ.Quiz_ServiceF1.Model.QuestionWrapper;
import org.springframework.data.repository.CrudRepository;


import com.QUIZ.Quiz_ServiceF1.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizDAO extends JpaRepository<Quiz, Integer> {
    //public  Quiz findById(int id);
//    quizDAO.findById(id).get()
//


    //public List<QuestionWrapper> findAllByIdIn( List<Integer> listofids);
}

