package com.mvd.fitboyz.web.manipulator;

import com.mvd.fitboyz.db.model.CompletedExercise;
import com.mvd.fitboyz.db.model.Progress;
import com.mvd.fitboyz.db.model.Session;
import com.mvd.fitboyz.mapper.CompletedExerciseMapper;
import com.mvd.fitboyz.mapper.ProgressMapper;
import com.mvd.fitboyz.web.dto.CompletedExerciseDto;
import com.mvd.fitboyz.web.dto.ProgressDto;
import com.mvd.fitboyz.web.dto.SessionDto;
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
