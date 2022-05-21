package com.mvd.fitboyzbackend.web.manipulator;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.mapper.*;
import com.mvd.fitboyzbackend.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingPlanManipulator {

    public TrainingPlan convertDtoToTrainingPlan(TrainingPlanDto trainingPlanDto){
        return TrainingPlanMapper.INSTANCE.dtoToTrainingPlan(trainingPlanDto);
    }
    public TrainingPlanDto convertTrainingPlanToDto(TrainingPlan trainingPlan){
        return TrainingPlanMapper.INSTANCE.trainingPlanToDto(trainingPlan);
    }

    public List<TrainingPlanDto> convertTrainingPlansToDtos(List<TrainingPlan> trainingPlans){
        return TrainingPlanMapper.INSTANCE.trainingPlansToDtos(trainingPlans);
    }

}
