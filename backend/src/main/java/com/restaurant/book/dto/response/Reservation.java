package com.restaurant.book.dto.response;

import java.time.LocalDateTime;
import java.util.List;

public record Reservation(
        LocalDateTime datetime,
        List<Long> reservedTableIds
) {}
