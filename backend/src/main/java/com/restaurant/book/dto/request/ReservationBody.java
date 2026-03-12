package com.restaurant.book.dto.request;

import java.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;

public record ReservationBody(
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datetime,
    String name,
    String email,
    Integer partySize,
    Long tableId) {}
