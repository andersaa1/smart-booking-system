package com.restaurant.book.dto.request;

import com.restaurant.book.dto.response.Table;
import java.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;

public record ReservationBody(
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datetime,
    String name,
    Integer partySize,
    Table table,
    Integer duration) {}
