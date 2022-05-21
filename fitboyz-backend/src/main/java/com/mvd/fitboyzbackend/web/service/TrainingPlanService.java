package com.mvd.fitboyzbackend.web.service;

import com.mvd.fitboyzbackend.db.client.*;
import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.manipulator.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingPlanService {

    private final TrainingPlanDbClient trainingPlanDbClient;
    private final TrainingPlanManipulator trainingPlanManipulator;
    private final UserDbClient userDbClient;
    private final ExerciseDbClient exerciseDbClient;

    public TrainingPlanDto createTrainingPlan(TrainingPlanDto trainingPlanDto, Long userId) {
        TrainingPlan trainingPlan = trainingPlanManipulator.convertDtoToTrainingPlan(trainingPlanDto);
        User user = userDbClient.getUserById(userId);
        trainingPlan.setUser(user);

        for (Session session : trainingPlan.getSessions()) {
            for (SessionExercise exercise : session.getSessionExercises()) {
                if (exerciseDbClient.getExercise(exercise.getName()) == null) {
                    exerciseDbClient.saveRecord(new Exercise(exercise.getName(), user));
                }
            }
        }

        trainingPlan = trainingPlanDbClient.saveRecord(trainingPlan);
        return trainingPlanManipulator.convertTrainingPlanToDto(trainingPlan);
    }

    public List<TrainingPlanDto> getTrainingPlans(Long userId) {
        List<TrainingPlan> trainingPlans = trainingPlanDbClient.getPlans(userId);
        return trainingPlanManipulator.convertTrainingPlansToDtos(trainingPlans);
    }
}
