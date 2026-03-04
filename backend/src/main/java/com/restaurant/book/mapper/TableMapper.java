package com.restaurant.book.mapper;

import com.restaurant.book.dto.response.Layout;
import com.restaurant.book.dto.response.Table;
import com.restaurant.book.model.TableEntity;

public class TableMapper {
    private TableMapper() {}

    public static Table toDto(TableEntity entity) {
        return new Table(
                entity.getZone(),
                entity.getTableGroup(),
                entity.getTotalSeats(),
                entity.getPreferences(),
                new Layout(entity.getCol(), entity.getRow(), entity.getWidth(), entity.getHeight())
        );
    }
}
