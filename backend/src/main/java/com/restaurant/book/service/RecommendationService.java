package com.restaurant.book.service;

import com.restaurant.book.dto.response.Recommendation;
import com.restaurant.book.dto.response.Reservation;
import com.restaurant.book.model.Preference;
import com.restaurant.book.model.TableEntity;
import com.restaurant.book.repository.TableRepository;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import org.springframework.stereotype.Service;

@Service
public class RecommendationService {

  private final TableRepository tableRepository;
  private final ReservationService reservationService;

  public RecommendationService(
      TableRepository tableRepository, ReservationService reservationService) {
    this.tableRepository = tableRepository;
    this.reservationService = reservationService;
  }

  public List<Recommendation> getRecommendations(
      LocalDateTime datetime, int partySize, List<Preference> preferences) {
    List<TableEntity> tables = tableRepository.findAll();
    Reservation reservations = reservationService.getReservation(datetime, null);
    Set<Long> reservedTableIds = Set.copyOf(reservations.reservedTableIds());

    // filters tables that are reserved and don't have capacity to seat that party
    List<TableEntity> availableTables =
        tables.stream()
            .filter(table -> !reservedTableIds.contains(table.getId()))
            .filter(table -> table.getTotalSeats() >= partySize)
            .toList();

    // returns an empty list if there are no tables that can seat that party size on the chosen date
    // - no available tables for that customer
    if (availableTables.isEmpty()) {
      return List.of();
    }

    // NEEDS CLEANING!
    // maps all tables to a Recommendation(Table, score)
    List<Recommendation> recommendedTables =
        availableTables.stream()
            .map(
                table -> new Recommendation(table.getId(), getScore(table, partySize, preferences)))
            .filter(recommendation -> recommendation.score() >= 1)
            .toList();

    // gets three tables with the best score
    List<Recommendation> top3 =
        recommendedTables.stream()
            .sorted(Comparator.comparingInt(Recommendation::score).reversed())
            .limit(3)
            .toList();

    return top3;
  }

  private int getScore(TableEntity table, int partySize, List<Preference> preferences) {
    int score = 0;

    // score gets +1 everytime a customers preference matches with the table
    for (Preference preference : preferences) {
      if (table.getPreferences().contains(preference)) {
        score += 1;
      }
    }

    int extraSeats = table.getTotalSeats() - partySize;

    if (extraSeats == 0) {
      score += 2;
    } else if (extraSeats == 1) {
      score += 1;
    } else { // score penalty if too many open seats
      score -= extraSeats;
    }

    return score;
  }
}
