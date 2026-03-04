package com.restaurant.book.repository;

import com.restaurant.book.model.TableEntity;
import com.restaurant.book.model.Zone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableRepository extends JpaRepository<TableEntity, Long> {
    List<TableEntity> findByZone(Zone zone);
    List<TableEntity> findByTotalSeats(Integer totalSeats);
}
