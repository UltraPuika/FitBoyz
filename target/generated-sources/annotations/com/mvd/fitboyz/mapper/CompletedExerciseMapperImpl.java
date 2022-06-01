package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.web.dto.CompletedExerciseDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-15T18:41:59+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class CompletedExerciseMapperImpl implements CompletedExerciseMapper {

    @Override
    public List<CompletedExerciseDto> completedExerciseToDto(List<CompletedExercise> completedExercise) {
        if ( completedExercise == null ) {
            return null;
        }

        List<CompletedExerciseDto> list = new ArrayList<CompletedExerciseDto>( completedExercise.size() );
        for ( CompletedExercise completedExercise1 : completedExercise ) {
            list.add( completedExerciseToCompletedExerciseDto( completedExercise1 ) );
        }

        return list;
    }

    protected CompletedExerciseDto completedExerciseToCompletedExerciseDto(CompletedExercise completedExercise) {
        if ( completedExercise == null ) {
            return null;
        }

        CompletedExerciseDto completedExerciseDto = new CompletedExerciseDto();

        completedExerciseDto.setId( completedExercise.getId() );
        completedExerciseDto.setName( completedExercise.getName() );
        completedExerciseDto.setCompletedSets( completedExercise.getCompletedSets() );
        completedExerciseDto.setCompletedReps( completedExercise.getCompletedReps() );
        completedExerciseDto.setAmount( completedExercise.getAmount() );
        completedExerciseDto.setUnit( completedExercise.getUnit() );

        return completedExerciseDto;
    }
}
