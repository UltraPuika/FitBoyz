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

    public TrainingPlan getCurrentPlan(){
        return trainingPlanDbRepository.findByIsCurrentTrue();
    }

    public long deleteEntity(Long id){
        return trainingPlanDbRepository.deleteByIdEquals(id);
    }

    public void updateCurrent(Long id){
        trainingPlanDbRepository.updateIsCurrentByIsCurrentTrue();
        trainingPlanDbRepository.updateIsCurrentByIdEquals(id);
    }
}
