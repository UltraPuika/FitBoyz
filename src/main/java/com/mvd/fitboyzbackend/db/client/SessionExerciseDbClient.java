package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SessionExerciseDbClient {
    private final SessionExerciseDbRepository sessionExerciseDbRepository;
    public long deleteEntity(Long id){
        return sessionExerciseDbRepository.deleteByIdEquals(id);
    }
}
