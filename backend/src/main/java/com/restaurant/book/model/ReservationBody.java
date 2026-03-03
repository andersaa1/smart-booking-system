package com.restaurant.book.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

public record ReservationBody(
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
        LocalDateTime datetime,
        String name,
        Integer partySize,
        Table table,
        Integer duration
) {}
