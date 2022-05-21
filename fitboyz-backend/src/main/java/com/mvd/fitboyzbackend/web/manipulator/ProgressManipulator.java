package com.mvd.fitboyzbackend.web.manipulator;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.mapper.*;
import com.mvd.fitboyzbackend.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProgressManipulator {
    public ProgressDto convertProgressToDto(Progress progress) {
        return ProgressMapper.INSTANCE.progressToDto(progress);
    }
    public Progress convertDtoToProgress(ProgressDto progressDto) {
        return ProgressMapper.INSTANCE.dtoToProgress(progressDto);
    }
    public List<ProgressDto> convertProgressesToDtos(List<Progress> progresses){
        return ProgressMapper.INSTANCE.progressesToDtos(progresses);
    }
    public  List<CompletedExerciseDto> convertCompletedExercisesToDtos(List<CompletedExercise> completedExercises){
        return CompletedExerciseMapper.INSTANCE.completedExerciseToDto(completedExercises);
    }
}
