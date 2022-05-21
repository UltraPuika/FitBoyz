package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ExerciseDbRepository extends PagingAndSortingRepository<Exercise, Long> {
    Exercise findByNameEquals(String name);

}
