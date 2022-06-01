package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class TrainingPlanDbClient {
    private final TrainingPlanDbRepository trainingPlanDbRepository;

    public TrainingPlan saveRecord(TrainingPlan trainingPlan){
        return trainingPlanDbRepository.save(trainingPlan);
    }

    public List<TrainingPlan> getPlans(Long id){
        return trainingPlanDbRepository.findByUser_IdEqualsOrderByDateDesc(id);
    }

    public TrainingPlan getPlan(Long id){
        return trainingPlanDbRepository.findByIdEquals(id);
    }

    public TrainingPlan getCurrentPlan(Long userId){
        return trainingPlanDbRepository.findByIsCurrentTrueAndUser_IdEquals(userId);
    }

    public void deleteEntity(Long id){
        trainingPlanDbRepository.deleteByIdEquals(id);
    }

    public void updateCurrent(Long id, Long userId){
        trainingPlanDbRepository.updateIsCurrentByIsCurrentTrueAndUser_IdEquals(userId);
        trainingPlanDbRepository.updateIsCurrentByIdEqualsAndUser_IdEquals(id, userId);
    }
}
