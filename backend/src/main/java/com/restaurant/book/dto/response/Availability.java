package com.restaurant.book.dto.response;

public record Availability(
        Table table,
        boolean available,
        Integer unavailableMinutes // if available is True, then 0
) {}
