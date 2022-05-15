package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.db.model.Exercise;
import com.mvd.fitboyz.db.repository.ExerciseDbRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ExerciseDbClient {

    private final ExerciseDbRepository exerciseDbRepository;

    public Exercise getExercise(String name) {
        return exerciseDbRepository.findByNameEquals(name);
    }

    public void saveRecord(Exercise exercise) {
        exerciseDbRepository.save(exercise);
    }
}
