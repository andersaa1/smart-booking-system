package com.restaurant.book.model;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "tables")
public class TableEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Zone zone;

  @Column(nullable = false)
  private Character tableGroup;

  @Column(nullable = false)
  private int totalSeats;

  @Column(name = "col_pos", nullable = false)
  private int col;

  @Column(name = "row_pos", nullable = false)
  private int row;

  @Column(nullable = false)
  private int width;

  @Column(nullable = false)
  private int height;

  @ElementCollection(fetch = FetchType.EAGER) // to avoid LazyInitializationException
  @CollectionTable(name = "table_preferences", joinColumns = @JoinColumn(name = "table_id"))
  @Enumerated(EnumType.STRING)
  @Column(name = "preference", nullable = false)
  private Set<Preference> preferences = new LinkedHashSet<>();

  protected TableEntity() {}

  public TableEntity(
      Zone zone,
      Character tableGroup,
      int totalSeats,
      int col,
      int row,
      int width,
      int height,
      Set<Preference> preferences) {
    this.zone = zone;
    this.tableGroup = tableGroup;
    this.totalSeats = totalSeats;
    this.col = col;
    this.row = row;
    this.width = width;
    this.height = height;
    this.preferences = preferences;
  }

  public Long getId() {
    return id;
  }

  public Zone getZone() {
    return zone;
  }

  public Character getTableGroup() {
    return tableGroup;
  }

  public int getTotalSeats() {
    return totalSeats;
  }

  public int getCol() {
    return col;
  }

  public int getRow() {
    return row;
  }

  public int getWidth() {
    return width;
  }

  public int getHeight() {
    return height;
  }

  public Set<Preference> getPreferences() {
    return preferences;
  }
}
