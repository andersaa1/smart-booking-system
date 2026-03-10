package com.restaurant.book.controller;

import com.restaurant.book.dto.request.ReservationBody;
import com.restaurant.book.dto.response.Reservation;
import com.restaurant.book.dto.response.Table;
import com.restaurant.book.service.ReservationService;
import java.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReservationController {

  private final ReservationService reservationService;

  public ReservationController(ReservationService reservationService) {
    this.reservationService = reservationService;
  }

  @GetMapping("/reservation")
  public Reservation reservations(
      @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
          LocalDateTime datetime,
      @RequestParam(required = false) Integer durationMinutes) {
    return reservationService.getReservation(datetime, durationMinutes);
  }

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
