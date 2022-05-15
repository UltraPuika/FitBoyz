package com.mvd.fitboyz.web.service;

import com.mvd.fitboyz.db.client.ExerciseDbClient;
import com.mvd.fitboyz.db.client.TrainingPlanDbClient;
import com.mvd.fitboyz.db.client.UserDbClient;
import com.mvd.fitboyz.db.model.*;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import com.mvd.fitboyz.web.manipulator.TrainingPlanManipulator;
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
