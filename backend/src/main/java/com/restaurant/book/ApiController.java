package com.restaurant.book;

import com.restaurant.book.records.Table;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/tables")
    public List<Table> tables() {
        return List.of(
                new Table("main", 'A', 6, List.of("window", "bathroom")),
                new Table("special", 'A', 8, List.of("private")),
                new Table("show", 'G', 2, List.of("stage")),
                new Table("quiet", 'B', 4, List.of()),
                new Table("terrace", 'E', 2, List.of("shade"))
        );
    }
}