package com.restaurant.book.controller;

import com.restaurant.book.dto.request.RecommendationBody;
import com.restaurant.book.dto.response.Recommendation;
import com.restaurant.book.model.Preference;
import com.restaurant.book.service.RecommendationService;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RecommendationController {

  private final RecommendationService recommendationService;

  public RecommendationController(RecommendationService recommendationService) {
    this.recommendationService = recommendationService;
  }

  @PostMapping("/recommendations")
  public List<Recommendation> recommendations(@RequestBody RecommendationBody body) {
    // date & time defaults to now
    LocalDateTime reservationTime = body.datetime() == null ? LocalDateTime.now() : body.datetime();
    // party size defaults to 1
    int partySize = body.partySize() == null ? 1 : body.partySize();
    // preference is a none preference if preferences are not specified
    List<Preference> preferences =
        body.preferences() == null ? List.of(Preference.NONE) : body.preferences();

    return recommendationService.getRecommendations(reservationTime, partySize, preferences);
  }
}
