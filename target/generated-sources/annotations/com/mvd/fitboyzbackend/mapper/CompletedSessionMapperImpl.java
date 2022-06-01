package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.CompletedExercise;
import com.mvd.fitboyzbackend.db.model.CompletedSession;
import com.mvd.fitboyzbackend.db.model.CompletedSet;
import com.mvd.fitboyzbackend.web.dto.CompletedExerciseDto;
import com.mvd.fitboyzbackend.web.dto.CompletedSessionDto;
import com.mvd.fitboyzbackend.web.dto.CompletedSetDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-02T00:44:50+0300",
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

    protected CompletedSet completedSetDtoToCompletedSet(CompletedSetDto completedSetDto) {
        if ( completedSetDto == null ) {
            return null;
        }

        CompletedSet completedSet = new CompletedSet();

        completedSet.setId( completedSetDto.getId() );
        completedSet.setCompletedReps( completedSetDto.getCompletedReps() );
        completedSet.setAmount( completedSetDto.getAmount() );

        return completedSet;
    }

    protected List<CompletedSet> completedSetDtoListToCompletedSetList(List<CompletedSetDto> list) {
        if ( list == null ) {
            return null;
        }

        List<CompletedSet> list1 = new ArrayList<CompletedSet>( list.size() );
        for ( CompletedSetDto completedSetDto : list ) {
            list1.add( completedSetDtoToCompletedSet( completedSetDto ) );
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
        completedExercise.setSets( completedSetDtoListToCompletedSetList( completedExerciseDto.getSets() ) );

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
