package com.QUIZ.Quiz_ServiceF1.Feign;

import com.QUIZ.Quiz_ServiceF1.Model.QuestionWrapper;
import com.QUIZ.Quiz_ServiceF1.Model.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@FeignClient(name = "QUESTION-SERVICE") // must match spring.application.name of the Question service
public interface QuizInterface {

    @PostMapping("/generateids") // must match QuestionService endpoint
    ResponseEntity<List<Integer>> generateIds( @RequestParam("name=category")
                                               String Category, @RequestParam("name=num") int num);

    @GetMapping("/getQuestions") // must accept ids
    ResponseEntity<List<QuestionWrapper>> getQuestionsId(@RequestParam List<Integer> listofids);

    @PostMapping("/getscore")
    ResponseEntity<Integer> getScore(@RequestBody List<Response> response);
}
