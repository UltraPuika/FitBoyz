package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CompletedSessionDto {
    private Long id;
    private LocalDate date;
    private List<CompletedExerciseDto> completedExercises;

}
