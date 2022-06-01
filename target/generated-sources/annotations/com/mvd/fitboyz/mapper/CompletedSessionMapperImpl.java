package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.db.model.CompletedSession;
import com.mvd.fitboyz.web.dto.CompletedExerciseDto;
import com.mvd.fitboyz.web.dto.CompletedSessionDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-15T18:41:59+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class CompletedSessionMapperImpl implements CompletedSessionMapper {

    @Override
    public CompletedSessionDto completedSessionToDto(CompletedSession completedSession) {
        if ( completedSession == null ) {
            return null;
        }

        CompletedSessionDto completedSessionDto = new CompletedSessionDto();

        completedSessionDto.setId( completedSession.getId() );
        completedSessionDto.setDate( completedSession.getDate() );
        completedSessionDto.setCompletedExercises( completedExerciseListToCompletedExerciseDtoList( completedSession.getCompletedExercises() ) );

        return completedSessionDto;
    }

    @Override
    public CompletedSession dtoToCompletedSession(CompletedSessionDto completedSessionDto) {
        if ( completedSessionDto == null ) {
            return null;
        }

        CompletedSession completedSession = new CompletedSession();

        completedSession.setId( completedSessionDto.getId() );
        completedSession.setDate( completedSessionDto.getDate() );
        completedSession.setCompletedExercises( completedExerciseDtoListToCompletedExerciseList( completedSessionDto.getCompletedExercises() ) );

        return completedSession;
    }

    @Override
    public List<CompletedSessionDto> completedSessionsToDtos(List<CompletedSession> completedSessions) {
        if ( completedSessions == null ) {
            return null;
        }

        List<CompletedSessionDto> list = new ArrayList<CompletedSessionDto>( completedSessions.size() );
        for ( CompletedSession completedSession : completedSessions ) {
            list.add( completedSessionToDto( completedSession ) );
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

    protected List<CompletedExerciseDto> completedExerciseListToCompletedExerciseDtoList(List<CompletedExercise> list) {
        if ( list == null ) {
            return null;
        }

        List<CompletedExerciseDto> list1 = new ArrayList<CompletedExerciseDto>( list.size() );
        for ( CompletedExercise completedExercise : list ) {
            list1.add( completedExerciseToCompletedExerciseDto( completedExercise ) );
        }

        return list1;
    }

    protected CompletedExercise completedExerciseDtoToCompletedExercise(CompletedExerciseDto completedExerciseDto) {
        if ( completedExerciseDto == null ) {
            return null;
        }

        CompletedExercise completedExercise = new CompletedExercise();

        completedExercise.setId( completedExerciseDto.getId() );
        completedExercise.setName( completedExerciseDto.getName() );
        completedExercise.setCompletedSets( completedExerciseDto.getCompletedSets() );
        completedExercise.setCompletedReps( completedExerciseDto.getCompletedReps() );
        completedExercise.setAmount( completedExerciseDto.getAmount() );
        completedExercise.setUnit( completedExerciseDto.getUnit() );

        return completedExercise;
    }

    protected List<CompletedExercise> completedExerciseDtoListToCompletedExerciseList(List<CompletedExerciseDto> list) {
        if ( list == null ) {
            return null;
        }

        List<CompletedExercise> list1 = new ArrayList<CompletedExercise>( list.size() );
        for ( CompletedExerciseDto completedExerciseDto : list ) {
            list1.add( completedExerciseDtoToCompletedExercise( completedExerciseDto ) );
        }

        return list1;
    }
}
