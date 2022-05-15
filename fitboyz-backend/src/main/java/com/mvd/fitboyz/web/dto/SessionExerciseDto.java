package com.mvd.fitboyz.web.dto;

import lombok.Data;

@Data
public class SessionExerciseDto {
    private Long id;
    private String name;
    private Integer sets;
    private Integer reps;
}
