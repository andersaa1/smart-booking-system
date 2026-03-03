package com.restaurant.book.model;

import java.util.List;

public record Table(
        Zone zone,
        Character tableGroup,
        Integer totalSeats,
        List<Preference> preferences
) {}
