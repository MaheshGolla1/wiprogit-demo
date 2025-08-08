package com.QUIZ.Quiz_ServiceF1.Controller;

import com.QUIZ.Quiz_ServiceF1.Model.QuestionWrapper;
import com.QUIZ.Quiz_ServiceF1.Model.QuizDto;
import com.QUIZ.Quiz_ServiceF1.Model.Response;
import com.QUIZ.Quiz_ServiceF1.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class QuizeController {
    @Autowired
    QuizService quizService;

  //  QuizService quizService;
    @PostMapping("/generateids")
    public ResponseEntity<String> createQuiz(@RequestParam String category,@RequestParam int num) {
        return quizService.createQuiz(category,num);

    }
    @GetMapping("/getquestions")
    public ResponseEntity<List<QuestionWrapper>> getQuiz() {
     return quizService.getQuizQuestions();
    }
    @PostMapping("/getscore")
    public ResponseEntity<Integer> submitQuiz(@PathVariable int id, @RequestBody List<Response> response){
        return quizService.calculateResult(id,response);
    }


}
