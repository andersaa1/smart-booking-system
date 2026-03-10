package com.restaurant.book.controller;

import com.restaurant.book.dto.response.Table;
import com.restaurant.book.model.Preference;
import com.restaurant.book.model.Zone;
import com.restaurant.book.service.TableService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TableController {

  private final TableService tableService;

  public TableController(TableService tableService) {
    this.tableService = tableService;
  }

  @GetMapping("/tables")
  public List<Table> tables(
      @RequestParam(required = false) List<Zone> zone,
      @RequestParam(required = false) Integer totalSeats,
      @RequestParam(required = false) Integer minSeats,
      @RequestParam(required = false) Integer maxSeats,
      @RequestParam(required = false) List<Preference> preferences) {
    return tableService.getTables(zone, totalSeats, minSeats, maxSeats, preferences);
  }
}
