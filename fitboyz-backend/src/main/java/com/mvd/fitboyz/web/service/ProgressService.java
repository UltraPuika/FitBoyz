package com.mvd.fitboyz.web.service;

import com.mvd.fitboyz.db.client.*;
import com.mvd.fitboyz.db.model.*;
import com.mvd.fitboyz.web.dto.CompletedExerciseDto;
import com.mvd.fitboyz.web.dto.ProgressDto;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import com.mvd.fitboyz.web.manipulator.ProgressManipulator;
import com.mvd.fitboyz.web.manipulator.TrainingPlanManipulator;
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
