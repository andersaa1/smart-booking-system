package com.restaurant.book.dto.request;

import com.restaurant.book.model.Preference;
import com.restaurant.book.model.Zone;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

public record RecommendationBody(
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
        LocalDateTime datetime,
        Integer partySize,
        List<Preference> preferences,
        Zone zone
) {}