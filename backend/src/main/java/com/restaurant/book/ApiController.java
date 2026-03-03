package com.restaurant.book;

import com.restaurant.book.model.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    List<Table> testTables = List.of(
            new Table(Zone.MAIN, 'A', 6, List.of(Preference.WINDOW, Preference.BATHROOM)),
            new Table(Zone.SPECIAL, 'A', 8, List.of(Preference.PRIVATE)),
            new Table(Zone.SHOW, 'G', 2, List.of(Preference.STAGE)),
            new Table(Zone.QUIET, 'B', 4, List.of()),
            new Table(Zone.TERRACE, 'E', 2, List.of(Preference.SHADE))
    );

    List<Availability> testAvailability = List.of(
            new Availability(testTables.get(0), false, 180),
            new Availability(testTables.get(1), true, 0),
            new Availability(testTables.get(2), true, 0),
            new Availability(testTables.get(3), false, 120),
            new Availability(testTables.get(4), true, 0)
    );

    List<Recommendation> testRecommendation = List.of(
            new Recommendation(testTables.get(0), 10),
            new Recommendation(testTables.get(1), 6),
            new Recommendation(testTables.get(2), 2)
    );

    @GetMapping("/tables")
    public List<Table> tables(
            @RequestParam(required = false)
            Zone zone,

            @RequestParam(required = false)
            Integer totalSeats
    ) {
        return testTables.stream()
                .filter(t -> zone == null || t.zone() == zone)
                .filter(t -> totalSeats == null || t.totalSeats().equals(totalSeats))
                .toList();
    }

    @GetMapping("/availability")
    public List<Availability> availability(
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
            LocalDateTime datetime,

            @RequestParam(required = false)
            Zone zone,

            @RequestParam(required = false)
            Character tableGroup
    ) {
        // date & time defaults to now
        LocalDateTime reservationTime = datetime == null ? LocalDateTime.now() : datetime;

        // table group can only be specified when zone is also specified
        if (tableGroup != null && zone == null) {
            throw new IllegalArgumentException("Table group can only be filtered when zone is also specified.");
        }

        return testAvailability.stream()
                .filter(t -> zone == null || t.table().zone() == zone)
                .filter(t -> tableGroup == null || t.table().tableGroup().equals(tableGroup))
                .toList();
    }

    @PostMapping("/recommendations")
    public List<Recommendation> recommendations(@RequestBody RecommendationBody body) {
        // date & time defaults to now
        LocalDateTime reservationTime = body.datetime() == null ? LocalDateTime.now() : body.datetime();
        // party size defaults to 1
        int partySize = body.partySize() == null ? 1 : body.partySize();
        Zone zone = body.zone(); // could also be null
        // preference is a none preference if preferences are not specified
        List<Preference> preferences = body.preferences() == null ? List.of(Preference.NONE) : body.preferences();

        return testRecommendation;
    }

    @PostMapping("reservation")
    public Table reservation(@RequestBody ReservationBody body) {
        // date & time defaults to now
        LocalDateTime reservationTime = body.datetime() == null ? LocalDateTime.now() : body.datetime();
        String name = body.name();
        int parySize = body.partySize();
        Table table = body.table();
        int duration = 180;

        return testTables.get(1);
    }
}