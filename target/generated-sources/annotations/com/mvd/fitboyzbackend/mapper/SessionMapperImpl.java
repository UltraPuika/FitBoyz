package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.Session;
import com.mvd.fitboyzbackend.db.model.SessionExercise;
import com.mvd.fitboyzbackend.web.dto.SessionDto;
import com.mvd.fitboyzbackend.web.dto.SessionExerciseDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-02T00:44:50+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class SessionMapperImpl implements SessionMapper {

    @Override
    public SessionDto sessionToDto(Session session) {
        if ( session == null ) {
            return null;
        }

        SessionDto sessionDto = new SessionDto();

        sessionDto.setId( session.getId() );
        sessionDto.setSessionTitle( session.getSessionTitle() );
        sessionDto.setIntensity( session.getIntensity() );
        sessionDto.setSessionExercises( sessionExerciseListToSessionExerciseDtoList( session.getSessionExercises() ) );

        return sessionDto;
    }

    protected SessionExerciseDto sessionExerciseToSessionExerciseDto(SessionExercise sessionExercise) {
        if ( sessionExercise == null ) {
            return null;
        }

        SessionExerciseDto sessionExerciseDto = new SessionExerciseDto();

        sessionExerciseDto.setId( sessionExercise.getId() );
        sessionExerciseDto.setName( sessionExercise.getName() );
        sessionExerciseDto.setSets( sessionExercise.getSets() );
        sessionExerciseDto.setReps( sessionExercise.getReps() );
        sessionExerciseDto.setType( sessionExercise.getType() );

        return sessionExerciseDto;
    }

    protected List<SessionExerciseDto> sessionExerciseListToSessionExerciseDtoList(List<SessionExercise> list) {
        if ( list == null ) {
            return null;
        }

        List<SessionExerciseDto> list1 = new ArrayList<SessionExerciseDto>( list.size() );
        for ( SessionExercise sessionExercise : list ) {
            list1.add( sessionExerciseToSessionExerciseDto( sessionExercise ) );
        }

        return list1;
    }
}
