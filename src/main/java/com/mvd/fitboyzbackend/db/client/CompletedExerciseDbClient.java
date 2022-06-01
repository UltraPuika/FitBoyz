package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CompletedExerciseDbClient {

    private final CompletedExercisesDbRepository completedExercisesDbRepository;
    public List<CompletedExercise> getCompletedExercises(String name, Long id){
        return completedExercisesDbRepository.findByNameEqualsAndCompletedSession_Session_TrainingPlan_User_Id(name, id);
    }
}
