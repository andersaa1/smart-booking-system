package com.restaurant.book.service;

import com.restaurant.book.dto.response.Table;
import com.restaurant.book.mapper.TableMapper;
import com.restaurant.book.model.Preference;
import com.restaurant.book.model.TableEntity;
import com.restaurant.book.model.Zone;
import com.restaurant.book.repository.TableRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableService {

    private final TableRepository repository;

    public TableService(TableRepository repository) {
        this.repository = repository;
    }

    public List<Table> getTables(List<Zone> zones, Integer totalSeats, Integer minSeats, Integer maxSeats, List<Preference> preferences) {
        List<TableEntity> tables;

        // filters tables by zone
        if (zones == null || zones.isEmpty()) {
            tables = repository.findAll();
        } else {
            tables = repository.findByZoneIn(zones);
        }

        // filters tables by totalSeats
        if (totalSeats != null) {
            tables = tables.stream()
                    .filter(t -> t.getTotalSeats() == totalSeats)
                    .toList();
        }

        // filters tables that have at least minSeats seats
        if (minSeats != null) {
            tables = tables.stream()
                    .filter(t -> t.getTotalSeats() >= minSeats)
                    .toList();
        }

        // filters tables that have no more seats than maxSeats
        if (maxSeats != null) {
            tables = tables.stream()
                    .filter(t -> t.getTotalSeats() <= maxSeats)
                    .toList();
        }

        // filters tables that match at least one preference
        if (preferences != null) {
            List<Preference> preferred = preferences.stream()
                    .filter(p -> p != null && p != Preference.NONE)
                    .distinct()
                    .toList();
            if (!preferred.isEmpty()) {
                tables = tables.stream()
                        .filter(t -> preferred.stream().anyMatch(t.getPreferences()::contains))
                        .toList();
            }
        }

        return tables.stream().map(TableMapper::toDto).toList();
    }
}
