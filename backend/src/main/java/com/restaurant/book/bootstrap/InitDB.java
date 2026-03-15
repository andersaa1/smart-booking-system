package com.restaurant.book.bootstrap;

import com.restaurant.book.model.Preference;
import com.restaurant.book.model.ReservationEntity;
import com.restaurant.book.model.TableEntity;
import com.restaurant.book.model.Zone;
import com.restaurant.book.repository.ReservationRepository;
import com.restaurant.book.repository.TableRepository;
import java.time.LocalDateTime;
import java.util.Set;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InitDB {

  @Bean
  CommandLineRunner initTables(
      TableRepository tableRepository, ReservationRepository reservationRepository) {
    return args -> {
      // avoids making duplicates when backend is restarted
      if (tableRepository.count() > 0 || reservationRepository.count() > 0) {
        return;
      }

      // creates the table entities in the database
      // main room
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'A',
              6,
              5,
              11,
              3,
              2,
              Set.of(
                  Preference.FAST_MUSIC,
                  Preference.BATHROOM,
                  Preference.WINDOW,
                  Preference.GAMES,
                  Preference.FAMILY)));
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'B',
              6,
              5,
              14,
              3,
              2,
              Set.of(
                  Preference.FAST_MUSIC,
                  Preference.WINDOW,
                  Preference.CHARGER,
                  Preference.GAMES,
                  Preference.FAMILY)));
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'C',
              4,
              9,
              11,
              2,
              2,
              Set.of(Preference.FAST_MUSIC, Preference.BATHROOM, Preference.FAMILY)));
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'D',
              4,
              9,
              14,
              2,
              2,
              Set.of(Preference.FAST_MUSIC, Preference.GAMES, Preference.FAMILY)));
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'E',
              4,
              12,
              11,
              2,
              2,
              Set.of(Preference.FAST_MUSIC, Preference.CHARGER, Preference.FAMILY)));
      tableRepository.save(
          new TableEntity(
              Zone.MAIN,
              'F',
              4,
              12,
              14,
              2,
              2,
              Set.of(
                  Preference.FAST_MUSIC, Preference.CHARGER, Preference.GAMES, Preference.FAMILY)));

      // show room
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'A',
              2,
              16,
              10,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE_FAR, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'B',
              2,
              16,
              14,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE_FAR, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'C',
              2,
              18,
              10,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE_FAR, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'D',
              2,
              18,
              14,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE_FAR, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'E',
              2,
              20,
              10,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'F',
              2,
              20,
              14,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'G',
              2,
              22,
              10,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.SHOW,
              'H',
              2,
              22,
              14,
              1,
              2,
              Set.of(Preference.SHOW, Preference.STAGE, Preference.CANDLE)));

      // quiet room
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'A',
              4,
              5,
              19,
              2,
              2,
              Set.of(
                  Preference.QUIET, Preference.RELAX_MUSIC, Preference.BAR, Preference.BATHROOM)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'B',
              4,
              5,
              22,
              2,
              2,
              Set.of(
                  Preference.QUIET, Preference.RELAX_MUSIC, Preference.BAR, Preference.BATHROOM)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'C',
              2,
              9,
              19,
              2,
              1,
              Set.of(Preference.QUIET, Preference.RELAX_MUSIC, Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'D',
              2,
              9,
              21,
              2,
              1,
              Set.of(
                  Preference.QUIET,
                  Preference.RELAX_MUSIC,
                  Preference.BATHROOM,
                  Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'E',
              2,
              9,
              23,
              2,
              1,
              Set.of(
                  Preference.QUIET,
                  Preference.RELAX_MUSIC,
                  Preference.BATHROOM,
                  Preference.WINDOW,
                  Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'F',
              2,
              13,
              19,
              1,
              2,
              Set.of(
                  Preference.QUIET,
                  Preference.RELAX_MUSIC,
                  Preference.WINDOW,
                  Preference.CHARGER,
                  Preference.CANDLE)));
      tableRepository.save(
          new TableEntity(
              Zone.QUIET,
              'G',
              2,
              13,
              22,
              1,
              2,
              Set.of(
                  Preference.QUIET,
                  Preference.RELAX_MUSIC,
                  Preference.WINDOW,
                  Preference.CHARGER,
                  Preference.CANDLE)));

      // terrace
      tableRepository.save(
          new TableEntity(
              Zone.STERRACE,
              'A',
              2,
              16,
              19,
              1,
              2,
              Set.of(Preference.OUTDOOR, Preference.NO_MUSIC, Preference.SHADE, Preference.GAMES)));
      tableRepository.save(
          new TableEntity(
              Zone.STERRACE,
              'B',
              2,
              16,
              22,
              1,
              2,
              Set.of(Preference.OUTDOOR, Preference.NO_MUSIC, Preference.SHADE)));
      tableRepository.save(
          new TableEntity(
              Zone.STERRACE,
              'C',
              2,
              12,
              26,
              2,
              1,
              Set.of(Preference.OUTDOOR, Preference.NO_MUSIC)));
      tableRepository.save(
          new TableEntity(
              Zone.ETERRACE, 'D', 2, 9, 26, 2, 1, Set.of(Preference.OUTDOOR, Preference.NO_MUSIC)));
      tableRepository.save(
          new TableEntity(
              Zone.ETERRACE,
              'E',
              2,
              6,
              26,
              2,
              1,
              Set.of(Preference.OUTDOOR, Preference.NO_MUSIC, Preference.GAMES)));

      // private rooms
      tableRepository.save(
          new TableEntity(
              Zone.LPRIVATE,
              'A',
              12,
              8,
              2,
              2,
              6,
              Set.of(
                  Preference.PRIVATE,
                  Preference.GAMES,
                  Preference.FREE_MUSIC,
                  Preference.CHARGER)));
      tableRepository.save(
          new TableEntity(
              Zone.SPRIVATE,
              'B',
              8,
              12,
              4,
              2,
              4,
              Set.of(
                  Preference.PRIVATE,
                  Preference.GAMES,
                  Preference.FREE_MUSIC,
                  Preference.CHARGER)));

      // creates the test reservation entities in the database
      var tables = tableRepository.findAll();
      var start = LocalDateTime.now();
      var end = start.plusHours(3);

      reservationRepository.save(
          new ReservationEntity(tables.get(0), start, end, "Juhan", "juhan@hotmail.ee", 6));
      // reservationRepository.save(new ReservationEntity(tables.get(0), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(5), start, end, "Andrus", "andrus@gmail.com", 4));
      // reservationRepository.save(new ReservationEntity(tables.get(5), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(10), start, end, "Ramul", "ramul@pilveprojekt.ee", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(10), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(11), start, end, "Ander", "ander@gmail.com", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(11), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(12), start, end, "Artur", "juhan@hotmail.ee", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(12), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(15), start, end, "Peeter", "peeter@msn.com", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(15), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(17), start, end, "Toomas", "toomas@hotmail.ee", 4));
      // reservationRepository.save(new ReservationEntity(tables.get(17), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(20), start, end, "Siim", "siim@gmail.com", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(20), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(23), start, end, "Ints", "ints@ut.ee", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(23), start, end));
      reservationRepository.save(
          new ReservationEntity(tables.get(27), start, end, "Juku", "juku@mail.ee", 2));
      // reservationRepository.save(new ReservationEntity(tables.get(27), start, end));
    };
  }
}
