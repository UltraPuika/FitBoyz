package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.Exercise;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ExerciseDbRepository extends PagingAndSortingRepository<Exercise, Long> {
    Exercise findByNameEquals(String name);

}
