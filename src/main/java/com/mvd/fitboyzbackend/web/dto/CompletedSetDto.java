package com.mvd.fitboyzbackend.web.dto;

import lombok.*;

@Data
public class CompletedSetDto {
    private Long id;
    private Integer completedReps;
    private Integer amount;
}
