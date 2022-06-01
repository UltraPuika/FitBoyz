package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;
@Mapper
public interface CompletedExerciseMapper {
    CompletedExerciseMapper INSTANCE = Mappers.getMapper( CompletedExerciseMapper.class );

    List<CompletedExerciseDto> completedExerciseToDto(List<CompletedExercise> completedExercise);

}
