package com.restaurant.book.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "reservations",
    indexes = {
      @Index(name = "id_table_start_end", columnList = "table_id,start_time,end_time"),
      @Index(name = "id_start_end", columnList = "start_time,end_time")
    })
public class ReservationEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  // one table can have many reservations
  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "table_id", nullable = false)
  private TableEntity table;

  @Column(name = "start_time", nullable = false)
  private LocalDateTime startTime;

  @Column(name = "end_time", nullable = false)
  private LocalDateTime endTime;

  protected ReservationEntity() {}

  public ReservationEntity(TableEntity table, LocalDateTime startTime, LocalDateTime endTime) {
    this.table = table;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public Long getId() {
    return id;
  }

  public TableEntity getTable() {
    return table;
  }
}
