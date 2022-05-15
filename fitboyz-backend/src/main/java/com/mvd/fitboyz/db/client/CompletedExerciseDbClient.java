package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.db.model.Progress;
import com.mvd.fitboyz.db.repository.CompletedExercisesDbRepository;
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
