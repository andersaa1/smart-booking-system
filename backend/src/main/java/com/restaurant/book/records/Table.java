package com.restaurant.book.records;

import java.util.List;

public record Table(
        String zone,
        Character tableGroup,
        Integer totalSeats,
        List<String> additionalInfo
) {}
