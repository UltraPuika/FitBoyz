package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TrainingPlanDto {
    private Long id;
    private String title;
    private Long planLength;
    private Integer NumberOfSessions;
    private LocalDate date;
    private List<SessionDto> sessions;
}
