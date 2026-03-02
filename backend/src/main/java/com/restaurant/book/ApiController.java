package com.restaurant.book;

import com.restaurant.book.model.Availability;
import com.restaurant.book.model.Table;
import com.restaurant.book.model.Zone;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    List<Table> testTables = List.of(
            new Table(Zone.MAIN, 'A', 6, List.of("window", "bathroom")),
            new Table(Zone.SPECIAL, 'A', 8, List.of("private")),
            new Table(Zone.SHOW, 'G', 2, List.of("stage")),
            new Table(Zone.QUIET, 'B', 4, List.of()),
            new Table(Zone.TERRACE, 'E', 2, List.of("shade"))
    );

    List<Availability> testAvailability = List.of(
            new Availability(testTables.get(0), false, 60),
            new Availability(testTables.get(1), true, 0),
            new Availability(testTables.get(2), true, 0),
            new Availability(testTables.get(3), false, 120),
            new Availability(testTables.get(4), true, 0)
    );

    @GetMapping("/tables")
    public List<Table> tables() {
        return testTables;
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
                .filter(p -> zone == null || p.table().zone() == zone)
                .filter(p -> tableGroup == null || p.table().tableGroup().equals(tableGroup))
                .toList();
    }
}