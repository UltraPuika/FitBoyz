package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface TrainingPlanMapper {
    TrainingPlanMapper INSTANCE = Mappers.getMapper( TrainingPlanMapper.class );

    TrainingPlanDto trainingPlanToDto(TrainingPlan trainingPlan);

    TrainingPlan dtoToTrainingPlan(TrainingPlanDto trainingPlanDto);

    List<TrainingPlanDto> trainingPlansToDtos(List<TrainingPlan> trainingPlans);
}
