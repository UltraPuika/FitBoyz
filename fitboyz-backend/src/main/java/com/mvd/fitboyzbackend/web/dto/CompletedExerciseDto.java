package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.util.*;

@Data
public class CompletedExerciseDto {
    private Long id;
    private String name;
    private List<CompletedSetDto> sets;
}
