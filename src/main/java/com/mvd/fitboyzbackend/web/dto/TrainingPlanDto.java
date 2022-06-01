package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TrainingPlanDto {
    private Long id;
    private String title;
    private Integer planLength;
    private Integer NumberOfSessions;
    private Boolean isCurrent;
    private LocalDate date;
    private List<SessionDto> sessions;
}
