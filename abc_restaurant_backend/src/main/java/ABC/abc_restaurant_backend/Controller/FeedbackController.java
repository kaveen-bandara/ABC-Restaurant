package ABC.abc_restaurant_backend.Controller;

import ABC.abc_restaurant_backend.Entity.Feedback;
import ABC.abc_restaurant_backend.Repository.FeedbackRepository;
import ABC.abc_restaurant_backend.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/submit")
    public ResponseEntity<?> submitFeedback(@RequestBody Map<String, String> payload) {

        String name = payload.get("name");
        String email = payload.get("email");
        String subject = payload.get("subject");
        String message = payload.get("message");

        List<Feedback> feedbackList = feedbackService.submitFeedback(name, email, subject, message);

        return new ResponseEntity<>(feedbackList, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Feedback>> getAllFeedback(){
        return new ResponseEntity<List<Feedback>>(feedbackService.allFeedback(), HttpStatus.OK);
    }
}