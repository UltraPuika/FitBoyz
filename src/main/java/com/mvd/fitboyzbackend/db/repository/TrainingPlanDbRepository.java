package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.*;

import java.util.List;

public interface TrainingPlanDbRepository extends PagingAndSortingRepository<TrainingPlan, Long> {

    List<TrainingPlan> findByUser_IdEqualsOrderByDateDesc(Long id);


    long deleteByIdEquals(Long id);

    TrainingPlan findByIsCurrentTrueAndUser_IdEquals(Long id);

    TrainingPlan findByIdEquals(Long id);

    @Transactional
    @Modifying
    @Query("update TrainingPlan t set t.isCurrent = false where t.isCurrent = true and t.user.id = ?1")
    void updateIsCurrentByIsCurrentTrueAndUser_IdEquals(Long id);

    @Transactional
    @Modifying
    @Query("update TrainingPlan t set t.isCurrent = true where t.id = ?1 and t.user.id = ?2")
    int updateIsCurrentByIdEqualsAndUser_IdEquals(Long id, Long id1);









}
