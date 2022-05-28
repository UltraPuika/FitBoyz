package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.*;

import java.util.List;

public interface TrainingPlanDbRepository extends PagingAndSortingRepository<TrainingPlan, Long> {

    List<TrainingPlan> findByUser_IdEqualsOrderByDateDesc(Long id);


    long deleteByIdEquals(Long id);

    TrainingPlan findByIsCurrentTrue();

    TrainingPlan findByIdEquals(Long id);

    @Transactional
    @Modifying
    @Query("update TrainingPlan t set t.isCurrent = false where t.isCurrent = true")
    void updateIsCurrentByIsCurrentTrue();

    @Transactional
    @Modifying
    @Query("update TrainingPlan t set t.isCurrent = true where t.id = ?1")
    void updateIsCurrentByIdEquals(Long id);









}
