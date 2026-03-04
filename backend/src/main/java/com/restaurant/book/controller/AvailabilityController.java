package com.restaurant.book.controller;

import com.restaurant.book.dto.response.Availability;
import com.restaurant.book.model.Zone;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AvailabilityController {

    @GetMapping("/availability")
    public List<Availability> availability(
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
            LocalDateTime datetime,

            @RequestParam(required = false)
            Zone zone,

            @RequestParam(required = false)
            Character tableGroup
    ) {
        // date & time defaults to now
        LocalDateTime reservationTime = datetime == null ? LocalDateTime.now() : datetime;

        // table group can only be specified when zone is also specified
        if (tableGroup != null && zone == null) {
            throw new IllegalArgumentException("Table group can only be filtered when zone is also specified.");
        }

        return null;
    }
}
