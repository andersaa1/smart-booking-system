package com.restaurant.book.repository;

import com.restaurant.book.model.ReservationEntity;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepository extends JpaRepository<ReservationEntity, Long> {

  // queries the reservation table for table id's that are between the start and end time
  @Query(
      """
        select distinct r.table.id
        from ReservationEntity r
        where r.table.id in :tableIds
          and r.startTime < :reservationEnd
          and r.endTime > :reservationStart
    """)
  List<Long> findReservedTableIds(
      @Param("tableIds") Collection<Long> tableIds,
      @Param("reservationStart") LocalDateTime reservationStart,
      @Param("reservationEnd") LocalDateTime reservationEnd);
}
