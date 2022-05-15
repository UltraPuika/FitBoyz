package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.web.dto.CompletedExerciseDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;
@Mapper
public interface CompletedExerciseMapper {
    CompletedExerciseMapper INSTANCE = Mappers.getMapper( CompletedExerciseMapper.class );

    List<CompletedExerciseDto> completedExerciseToDto(List<CompletedExercise> completedExercise);

}
