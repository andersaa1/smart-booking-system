package com.restaurant.book.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "email", nullable = false)
  private String email;

  @Column(name = "party_size", nullable = false)
  private Integer partySize;

  protected ReservationEntity() {}

  public ReservationEntity(
      TableEntity table,
      LocalDateTime startTime,
      LocalDateTime endTime,
      String name,
      String email,
      Integer partySize) {
    this.table = table;
    this.startTime = startTime;
    this.endTime = endTime;
    this.name = name;
    this.email = email;
    this.partySize = partySize;
  }

  public Long getId() {
    return id;
  }

  public TableEntity getTable() {
    return table;
  }
}
