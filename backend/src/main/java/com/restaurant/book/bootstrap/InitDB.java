package com.restaurant.book.bootstrap;

import com.restaurant.book.model.Preference;
import com.restaurant.book.model.Zone;
import com.restaurant.book.model.TableEntity;
import com.restaurant.book.repository.TableRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

@Configuration
public class InitDB {

    @Bean
    CommandLineRunner initTables(TableRepository repository) {
        return args -> {
            if (repository.count() > 0) return;

            // main room
            repository.save(new TableEntity(Zone.MAIN, 'A', 6, 5, 11, 3, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.MAIN, 'B', 6, 5, 14, 3, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.MAIN, 'C', 4, 9, 11, 2, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.MAIN, 'D', 4, 9, 14, 2, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.MAIN, 'E', 4, 12, 11, 2, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.MAIN, 'F', 4, 12, 14, 2, 2, Set.of(Preference.NONE)));

            // show room
            repository.save(new TableEntity(Zone.SHOW, 'A', 2, 16, 10, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'B', 2, 16, 14, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'C', 2, 18, 10, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'D', 2, 18, 14, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'E', 2, 20, 10, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'F', 2, 20, 14, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'G', 2, 22, 10, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.SHOW, 'H', 2, 22, 14, 1, 2, Set.of(Preference.NONE)));

            // quiet room
            repository.save(new TableEntity(Zone.QUIET, 'A', 4, 5, 19, 2, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'B', 4, 5, 22, 2, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'C', 2, 9, 19, 2, 1, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'D', 2, 9, 21, 2, 1, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'E', 2, 9, 23, 2, 1, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'F', 2, 13, 19, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.QUIET, 'G', 2, 13, 22, 1, 2, Set.of(Preference.NONE)));

            // terrace
            repository.save(new TableEntity(Zone.TERRACE, 'A', 2, 16, 19, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.TERRACE, 'B', 2, 16, 22, 1, 2, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.TERRACE, 'C', 2, 12, 26, 2, 1, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.TERRACE, 'D', 2, 9, 26, 2, 1, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.TERRACE, 'E', 2, 6, 26, 2, 1, Set.of(Preference.NONE)));

            // private rooms
            repository.save(new TableEntity(Zone.PRIVATE, 'A', 12, 8, 2, 2, 6, Set.of(Preference.NONE)));
            repository.save(new TableEntity(Zone.PRIVATE, 'B', 8, 12, 4, 2, 4, Set.of(Preference.NONE)));
        };
    }
}
