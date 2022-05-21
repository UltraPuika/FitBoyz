package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CompletedExercisesDbRepository extends PagingAndSortingRepository<CompletedExercise, Long> {

    List<CompletedExercise> findByNameEqualsAndCompletedSession_Session_TrainingPlan_User_Id(String name, Long id);

}
