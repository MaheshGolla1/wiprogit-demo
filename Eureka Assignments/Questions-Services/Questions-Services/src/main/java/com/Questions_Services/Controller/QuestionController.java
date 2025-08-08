package com.Questions_Services.Controller;

import java.util.*;
import com.Questions_Services.Model.Response;

import com.Questions_Services.Model.QuestionWrapper;
import com.Questions_Services.Model.QuizQuestions;
import com.Questions_Services.Service.QuestionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class QuestionController {

    @Autowired
    QuestionServices questionServices;
    @GetMapping ("/allquestions")
    public List<QuizQuestions> getAllQuestions() {

        return questionServices.getallquestions();
    }
    @PostMapping("/allquestions")
    public String add(@RequestBody
                                 QuizQuestions quizQuestions) {
         questionServices.add(quizQuestions);
         return "Successfully added questions";
    }

    @PutMapping("/allquestions")
    public String update(@RequestBody
                             QuizQuestions quizQuestions) {
         questionServices.update(quizQuestions);
         return  "Successfully updated questions";
    }

    @DeleteMapping("/allquestions/{id}")
    public void delete(@PathVariable int id ) {
         questionServices.delete(id);
    }
    @PostMapping(value = "/generate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> generateIds(@RequestParam String category,@RequestParam int num) {
        return questionServices.getQuestionsIdforQuiz(category,num);

    }
    @GetMapping("/getquestions")//@RequestBody List<Integer> questionIds
    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId() {
        return questionServices.getQuestionsFromId();
    }
    @PostMapping("/getscore")
    public ResponseEntity<Integer> getScore(@RequestBody List<Response> response) {
     return questionServices.getScore(response);
    }







}
