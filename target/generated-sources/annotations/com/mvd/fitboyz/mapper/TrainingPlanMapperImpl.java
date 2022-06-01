package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.Session;
import com.mvd.fitboyz.db.model.SessionExercise;
import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.web.dto.SessionDto;
import com.mvd.fitboyz.web.dto.SessionExerciseDto;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-15T18:41:59+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class TrainingPlanMapperImpl implements TrainingPlanMapper {

    @Override
    public TrainingPlanDto trainingPlanToDto(TrainingPlan trainingPlan) {
        if ( trainingPlan == null ) {
            return null;
        }

        TrainingPlanDto trainingPlanDto = new TrainingPlanDto();

        trainingPlanDto.setId( trainingPlan.getId() );
        trainingPlanDto.setTitle( trainingPlan.getTitle() );
        trainingPlanDto.setPlanLength( trainingPlan.getPlanLength() );
        trainingPlanDto.setNumberOfSessions( trainingPlan.getNumberOfSessions() );
        trainingPlanDto.setDate( trainingPlan.getDate() );
        trainingPlanDto.setSessions( sessionListToSessionDtoList( trainingPlan.getSessions() ) );

        return trainingPlanDto;
    }

    @Override
    public TrainingPlan dtoToTrainingPlan(TrainingPlanDto trainingPlanDto) {
        if ( trainingPlanDto == null ) {
            return null;
        }

        TrainingPlan trainingPlan = new TrainingPlan();

        trainingPlan.setId( trainingPlanDto.getId() );
        trainingPlan.setTitle( trainingPlanDto.getTitle() );
        trainingPlan.setPlanLength( trainingPlanDto.getPlanLength() );
        trainingPlan.setNumberOfSessions( trainingPlanDto.getNumberOfSessions() );
        trainingPlan.setDate( trainingPlanDto.getDate() );
        trainingPlan.setSessions( sessionDtoListToSessionList( trainingPlanDto.getSessions() ) );

        return trainingPlan;
    }

    @Override
    public List<TrainingPlanDto> trainingPlansToDtos(List<TrainingPlan> trainingPlans) {
        if ( trainingPlans == null ) {
            return null;
        }

        List<TrainingPlanDto> list = new ArrayList<TrainingPlanDto>( trainingPlans.size() );
        for ( TrainingPlan trainingPlan : trainingPlans ) {
            list.add( trainingPlanToDto( trainingPlan ) );
        }

        return list;
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

    protected SessionDto sessionToSessionDto(Session session) {
        if ( session == null ) {
            return null;
        }

        SessionDto sessionDto = new SessionDto();

        sessionDto.setId( session.getId() );
        sessionDto.setTitle( session.getTitle() );
        sessionDto.setIntensity( session.getIntensity() );
        sessionDto.setSessionExercises( sessionExerciseListToSessionExerciseDtoList( session.getSessionExercises() ) );

        return sessionDto;
    }

    protected List<SessionDto> sessionListToSessionDtoList(List<Session> list) {
        if ( list == null ) {
            return null;
        }

        List<SessionDto> list1 = new ArrayList<SessionDto>( list.size() );
        for ( Session session : list ) {
            list1.add( sessionToSessionDto( session ) );
        }

        return list1;
    }

    protected SessionExercise sessionExerciseDtoToSessionExercise(SessionExerciseDto sessionExerciseDto) {
        if ( sessionExerciseDto == null ) {
            return null;
        }

        SessionExercise sessionExercise = new SessionExercise();

        sessionExercise.setId( sessionExerciseDto.getId() );
        sessionExercise.setName( sessionExerciseDto.getName() );
        sessionExercise.setSets( sessionExerciseDto.getSets() );
        sessionExercise.setReps( sessionExerciseDto.getReps() );

        return sessionExercise;
    }

    protected List<SessionExercise> sessionExerciseDtoListToSessionExerciseList(List<SessionExerciseDto> list) {
        if ( list == null ) {
            return null;
        }

        List<SessionExercise> list1 = new ArrayList<SessionExercise>( list.size() );
        for ( SessionExerciseDto sessionExerciseDto : list ) {
            list1.add( sessionExerciseDtoToSessionExercise( sessionExerciseDto ) );
        }

        return list1;
    }

    protected Session sessionDtoToSession(SessionDto sessionDto) {
        if ( sessionDto == null ) {
            return null;
        }

        Session session = new Session();

        session.setId( sessionDto.getId() );
        session.setTitle( sessionDto.getTitle() );
        session.setIntensity( sessionDto.getIntensity() );
        session.setSessionExercises( sessionExerciseDtoListToSessionExerciseList( sessionDto.getSessionExercises() ) );

        return session;
    }

    protected List<Session> sessionDtoListToSessionList(List<SessionDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Session> list1 = new ArrayList<Session>( list.size() );
        for ( SessionDto sessionDto : list ) {
            list1.add( sessionDtoToSession( sessionDto ) );
        }

        return list1;
    }
}
