package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
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
