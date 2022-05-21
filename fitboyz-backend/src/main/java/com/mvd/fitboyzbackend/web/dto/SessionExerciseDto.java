package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

@Data
public class SessionExerciseDto {
    private Long id;
    private String name;
    private Integer sets;
    private Integer reps;
}
