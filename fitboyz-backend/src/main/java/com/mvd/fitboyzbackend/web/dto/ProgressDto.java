package com.mvd.fitboyzbackend.web.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ProgressDto {
    private Long id;
    private String name;
    private Integer amount;
    private String unit;
    private LocalDate date;
}
