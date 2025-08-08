package com.Questions_Services.Service;
import java.util.*;
import java.util.stream.Collectors;

import com.Questions_Services.Model.Response;
import com.Questions_Services.DAO.QuestionDAO;
import com.Questions_Services.Model.QuestionWrapper;
import com.Questions_Services.Model.QuizQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class QuestionServices {
    @Autowired
    QuestionDAO questionDAO;
//     public  List<QuizQuestions>  getallquestions() {
//       return questionDAO.findAll();
//
//
//    }
    List<Integer> questionIds;
    public List<QuizQuestions> getallquestions() {
        List<QuizQuestions> list = questionDAO.findAll();

        return list;
    }


    public QuizQuestions add(QuizQuestions quizQuestions) {
         return questionDAO.save(quizQuestions);
    }
    public QuizQuestions update(QuizQuestions quizQuestions) {
        return questionDAO.save(quizQuestions);
    }
    public void delete(int id) {

        List<QuizQuestions> list = questionDAO.findAll();
       for( QuizQuestions q : list ) {
           if(q.getId() == id) {
               questionDAO.delete(q);
               break;
           }
       }

    }

    public ResponseEntity<String> getQuestionsIdforQuiz(String category,int num) {
         questionIds = questionDAO.findByCategory(category)
                .stream()
                .map(q ->  q.getId())  // ✅ correct extraction
                .collect(Collectors.toList());


        return new ResponseEntity<>("Success i am here mahesh" , HttpStatus.CREATED);

    }

    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId() {
        List<QuestionWrapper> questionforUsers=new ArrayList<>();

        if (questionIds == null || questionIds.isEmpty()) {
            return new ResponseEntity<>(questionforUsers, HttpStatus.BAD_REQUEST);
            // or throw custom error
        }

        for(int n:questionIds){
            QuizQuestions Q=questionDAO.findById(n).get();
            QuestionWrapper questionwrapper=new QuestionWrapper();

            questionwrapper.setId(Q.getId());
            questionwrapper.setQuestion(Q.getQuestion());
            questionwrapper.setOption1(  Q.getOption1());
            questionwrapper.setOption2( Q.getOption2());
            questionwrapper.setOption3( Q.getOption3());
            questionwrapper.setOption4( Q.getOption4());


            questionforUsers.add(questionwrapper);

        }
        return new ResponseEntity<>(questionforUsers,HttpStatus.OK);


    }

    public ResponseEntity<Integer> getScore(List<Response> response) {
        int right=0;

        for(Response r:response) {
            QuizQuestions q2=questionDAO.findAllById(r.getId());
            if(r.getResponse().equals(q2.getCorrect()))
                right++;
        }
        return new ResponseEntity<>(right,HttpStatus.OK);
    }
}
