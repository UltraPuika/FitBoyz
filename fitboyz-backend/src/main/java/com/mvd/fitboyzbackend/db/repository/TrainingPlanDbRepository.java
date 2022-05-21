package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TrainingPlanDbRepository extends PagingAndSortingRepository<TrainingPlan, Long> {
    List<TrainingPlan> findByUser_IdEqualsOrderByDateAsc(Long id);

}
