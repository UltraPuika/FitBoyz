package com.mvd.fitboyzbackend.web.service;

import com.mvd.fitboyzbackend.db.client.*;
import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.manipulator.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingPlanService {

    private final TrainingPlanDbClient trainingPlanDbClient;
    private final TrainingPlanManipulator trainingPlanManipulator;
    private final SessionDbClient sessionDbClient;
    private final SessionManipulator sessionManipulator;
    private final UserDbClient userDbClient;
    private final SessionExerciseDbClient sessionExerciseDbClient;

    public TrainingPlanDto createTrainingPlan(TrainingPlanDto trainingPlanDto, Long userId) {
        TrainingPlan trainingPlan = trainingPlanManipulator.convertDtoToTrainingPlan(trainingPlanDto);
        User user = userDbClient.getUserById(userId);
        trainingPlan.setUser(user);
        trainingPlan.setDate(LocalDate.now());
        trainingPlan.setIsCurrent(false);

        return trainingPlanManipulator.convertTrainingPlanToDto(trainingPlanDbClient.saveRecord(trainingPlan));
    }

    public List<TrainingPlanDto> getTrainingPlans(Long userId) {
        List<TrainingPlan> trainingPlans = trainingPlanDbClient.getPlans(userId);
        return trainingPlanManipulator.convertTrainingPlansToDtos(trainingPlans);
    }

    public TrainingPlanDto getTrainingPlan(Long id) {
        TrainingPlan trainingPlan = trainingPlanDbClient.getPlan(id);
        return trainingPlanManipulator.convertTrainingPlanToDto(trainingPlan);
    }

    public TrainingPlanDto getCurrentTrainingPlan(Long userId) {
        TrainingPlan trainingPlan = trainingPlanDbClient.getCurrentPlan(userId);
        return trainingPlanManipulator.convertTrainingPlanToDto(trainingPlan);
    }

    public void updateCurrentPlan(Long id, Long userId) {
        trainingPlanDbClient.updateCurrent(id, userId);
    }

    public void deleteTrainingPlan(Long id) {
        trainingPlanDbClient.deleteEntity(id);
    }

    public void deleteSession(Long id) {
        sessionDbClient.deleteEntity(id);
    }

    public void deleteExercise(Long id) {
        sessionExerciseDbClient.deleteEntity(id);
    }

    public SessionDto getSession(Long sessionId) {
        Session session = sessionDbClient.getSessionById(sessionId);
        return sessionManipulator.convertSessionToDto(session);
    }
}
