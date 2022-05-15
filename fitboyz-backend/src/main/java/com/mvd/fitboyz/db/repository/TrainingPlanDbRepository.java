package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.TrainingPlan;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TrainingPlanDbRepository extends PagingAndSortingRepository<TrainingPlan, Long> {
    List<TrainingPlan> findByUser_IdEqualsOrderByDateAsc(Long id);

}
