package com.restaurant.book.controller;

import com.restaurant.book.dto.request.ReservationBody;
import com.restaurant.book.dto.response.Table;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api")
public class ReservationController {

    @PostMapping("/reservation")
    public Table reservation(@RequestBody ReservationBody body) {
        // date & time defaults to now
        LocalDateTime reservationTime = body.datetime() == null ? LocalDateTime.now() : body.datetime();
        String name = body.name();
        int parySize = body.partySize();
        Table table = body.table();
        int duration = 180;

        return null;
    }
}
