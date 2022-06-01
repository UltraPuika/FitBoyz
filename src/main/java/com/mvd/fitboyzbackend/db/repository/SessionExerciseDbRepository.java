package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.*;

public interface SessionExerciseDbRepository extends PagingAndSortingRepository<SessionExercise, Long> {
    long deleteByIdEquals(Long id);

}
