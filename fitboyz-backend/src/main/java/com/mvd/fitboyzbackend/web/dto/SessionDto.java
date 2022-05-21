package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.util.List;

@Data
public class SessionDto {
    private Long id;
    private String title;
    private String intensity;
    private List<SessionExerciseDto> sessionExercises;
}
