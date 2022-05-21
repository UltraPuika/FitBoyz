package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
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
