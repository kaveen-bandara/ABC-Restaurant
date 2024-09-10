package ABC.abc_restaurant_backend.Controller;

import ABC.abc_restaurant_backend.Entity.Reservation;
import ABC.abc_restaurant_backend.Repository.ReservationRepository;
import ABC.abc_restaurant_backend.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/reserve")
    public ResponseEntity<?> submitReservation(@RequestBody Map<String, String> payload) {

        String name = payload.get("name");
        String email = payload.get("email");
        String phone = payload.get("phone");
        String date = payload.get("date");
        String time = payload.get("time");

        List<Reservation> feedbackList = reservationService.submitReservation(name, email, phone, date, time);

        return new ResponseEntity<>(feedbackList, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Reservation>> getAllReservation(){
        return new ResponseEntity<List<Reservation>>(reservationService.allReservation(), HttpStatus.OK);
    }
}
