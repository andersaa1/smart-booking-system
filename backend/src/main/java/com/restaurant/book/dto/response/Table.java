package com.restaurant.book.dto.response;

import com.restaurant.book.model.Preference;
import com.restaurant.book.model.Zone;

import java.util.Set;

public record Table(
        Long id,
        Zone zone,
        Character tableGroup,
        Integer totalSeats,
        Set<Preference> preferences,
        Layout layout
) {}
