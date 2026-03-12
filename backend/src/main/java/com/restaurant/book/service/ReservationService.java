package com.restaurant.book.service;

import com.restaurant.book.dto.response.Reservation;
import com.restaurant.book.model.ReservationEntity;
import com.restaurant.book.model.TableEntity;
import com.restaurant.book.repository.ReservationRepository;
import com.restaurant.book.repository.TableRepository;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

  private final TableRepository tableRepository;
  private final ReservationRepository reservationRepository;

  public ReservationService(
      TableRepository tableRepository, ReservationRepository reservationRepository) {
    this.tableRepository = tableRepository;
    this.reservationRepository = reservationRepository;
  }

  public Reservation getReservation(LocalDateTime datetime, Integer durationMinutes) {
    // if date & time not specified then default to now
    LocalDateTime start = (datetime == null) ? LocalDateTime.now() : datetime;
    // if duration not specified then default to 3 hours
    int duration = (durationMinutes == null || durationMinutes <= 0) ? 180 : durationMinutes;
    LocalDateTime end = start.plusMinutes(duration);

    List<TableEntity> tables = tableRepository.findAll();
    List<Long> tableIds = tables.stream().map(TableEntity::getId).toList();

    // queries the DB for table id's that are reserved between the starting and ending time
    List<Long> reserved = reservationRepository.findReservedTableIds(tableIds, start, end);

    return new Reservation(start, reserved);
  }

  public String createReservation(
      long tableId,
      LocalDateTime datetime,
      String name,
      String email,
      int partySize,
      Integer durationMinutes) {
    // gets the table to be reserved and throws an exception if that table doesn't exist in the
    // repository
    TableEntity tableToBeReserved =
        tableRepository
            .findById(tableId)
            .orElseThrow(() -> new IllegalArgumentException("Table not found!"));

    // checks if the table is available
    Reservation reservations = getReservation(datetime, durationMinutes);
    List<Long> reservedTableIds = reservations.reservedTableIds();
    if (reservedTableIds.contains(tableId)) {
      return "This table is not available for reservations at this time!";
    }

    // checks if the table has enough seats for that party size
    if (tableToBeReserved.getTotalSeats() < partySize) {
      return "This table doesn't have enough seats for this party size!";
    }

    LocalDateTime start = (datetime == null) ? LocalDateTime.now() : datetime;
    int duration = (durationMinutes == null || durationMinutes <= 0) ? 180 : durationMinutes;
    LocalDateTime end = start.plusMinutes(duration);

    ReservationEntity reservation =
        new ReservationEntity(tableToBeReserved, start, end, name, email, partySize);

    reservationRepository.save(reservation);

    return "Table "
        + tableToBeReserved.getZone()
        + "-"
        + tableToBeReserved.getTableGroup()
        + " reserved.\n"
        + "Reservation Information:\n"
        + "Date & Time: "
        + datetime
        + "\n"
        + "Name: "
        + name
        + "\n"
        + "Email: "
        + email
        + "\n";
  }
}
