package com.QUIZ.Quiz_ServiceF1.Service;

//import org.apache.catalina.connector.Response;
//import com.QUIZ.Quiz_ServiceF1.DAO.QuizDAO;
import com.QUIZ.Quiz_ServiceF1.DAO.QuizDAO;
import com.QUIZ.Quiz_ServiceF1.Feign.QuizInterface;
import com.QUIZ.Quiz_ServiceF1.Model.QuestionWrapper;
import com.QUIZ.Quiz_ServiceF1.Model.Quiz;
import com.QUIZ.Quiz_ServiceF1.Model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

import java.util.List;

@Service
public class QuizService {
    @Autowired
    QuizInterface quizInterface;

    @Autowired
    QuizDAO quizDAO;

    public ResponseEntity<String> createQuiz(String category, int num) {
        System.out.println("Calling Feign with: " + category + " and num: " + num);
        List<Integer> questions = quizInterface.generateIds(category, num).getBody();
        Quiz quize = new Quiz();
        quize.setQuestionIds(questions);
        quizDAO.save(quize);
        return new ResponseEntity<>("Quiz created with ID: " + quize.getId(), HttpStatus.CREATED);
    }


    public ResponseEntity<Integer> calculateResult(int id, List<Response> response) {
 ResponseEntity<Integer> getScore=quizInterface.getScore(response);
        return getScore;

    }
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(){
        Quiz quize=new Quiz();
        List<Integer> listofids= quize.getQuestionIds();
        ResponseEntity<List<QuestionWrapper>> questions= quizInterface. getQuestionsId(listofids);
        return new  ResponseEntity<>(questions.getBody(),HttpStatus.OK);




    }



}
