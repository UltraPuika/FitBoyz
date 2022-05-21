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
public class ProgressService {

    private final ProgressDbClient progressDbClient;
    private final ProgressManipulator progressManipulator;
    private final UserDbClient userDbClient;
    private final CompletedExerciseDbClient completedExerciseDbClient;

    public ProgressDto createProgress(ProgressDto progressDto, Long userId) {
        Progress progress = progressManipulator.convertDtoToProgress(progressDto);
        User user = userDbClient.getUserById(userId);
        progress.setUser(user);

        progress = progressDbClient.saveRecord(progress);
        return progressManipulator.convertProgressToDto(progress);
    }

    public List<ProgressDto> getProgress(Long userId) {
        List<Progress> progresses = progressDbClient.getProgresses(userId);
        return progressManipulator.convertProgressesToDtos(progresses);
    }

    public List<CompletedExerciseDto> getExerciseProgress(String name, Long userId) {
        List<CompletedExercise> completedExercises = completedExerciseDbClient.getCompletedExercises(name, userId);
        return progressManipulator.convertCompletedExercisesToDtos(completedExercises);
    }
}
