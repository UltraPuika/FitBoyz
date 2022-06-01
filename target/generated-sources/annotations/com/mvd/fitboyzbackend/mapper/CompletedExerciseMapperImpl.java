package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.CompletedExercise;
import com.mvd.fitboyzbackend.db.model.CompletedSet;
import com.mvd.fitboyzbackend.web.dto.CompletedExerciseDto;
import com.mvd.fitboyzbackend.web.dto.CompletedSetDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-02T00:44:50+0300",
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

    protected CompletedSetDto completedSetToCompletedSetDto(CompletedSet completedSet) {
        if ( completedSet == null ) {
            return null;
        }

        CompletedSetDto completedSetDto = new CompletedSetDto();

        completedSetDto.setId( completedSet.getId() );
        completedSetDto.setCompletedReps( completedSet.getCompletedReps() );
        completedSetDto.setAmount( completedSet.getAmount() );

        return completedSetDto;
    }

    protected List<CompletedSetDto> completedSetListToCompletedSetDtoList(List<CompletedSet> list) {
        if ( list == null ) {
            return null;
        }

        List<CompletedSetDto> list1 = new ArrayList<CompletedSetDto>( list.size() );
        for ( CompletedSet completedSet : list ) {
            list1.add( completedSetToCompletedSetDto( completedSet ) );
        }

        return list1;
    }

    protected CompletedExerciseDto completedExerciseToCompletedExerciseDto(CompletedExercise completedExercise) {
        if ( completedExercise == null ) {
            return null;
        }

        CompletedExerciseDto completedExerciseDto = new CompletedExerciseDto();

        completedExerciseDto.setId( completedExercise.getId() );
        completedExerciseDto.setName( completedExercise.getName() );
        completedExerciseDto.setSets( completedSetListToCompletedSetDtoList( completedExercise.getSets() ) );

        return completedExerciseDto;
    }
}
