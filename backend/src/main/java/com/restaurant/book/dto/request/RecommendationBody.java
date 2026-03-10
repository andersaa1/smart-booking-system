package com.restaurant.book.dto.request;

import com.restaurant.book.model.Preference;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;

public record RecommendationBody(
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime datetime,
    Integer partySize,
    List<Preference> preferences) {}
