package com.restaurant.book.repository;

import com.restaurant.book.model.TableEntity;
import com.restaurant.book.model.Zone;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<TableEntity, Long> {
  List<TableEntity> findByZoneIn(List<Zone> zones);
}
