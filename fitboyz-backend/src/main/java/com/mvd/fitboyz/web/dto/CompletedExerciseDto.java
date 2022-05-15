package com.mvd.fitboyz.web.dto;

import lombok.Data;

@Data
public class CompletedExerciseDto {
    private Long id;
    private String name;
    private Integer completedSets;
    private Integer completedReps;
    private Integer amount;
    private String unit;
}
