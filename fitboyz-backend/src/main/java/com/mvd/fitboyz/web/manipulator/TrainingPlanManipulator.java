package com.mvd.fitboyz.web.manipulator;

import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.mapper.TrainingPlanMapper;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
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
