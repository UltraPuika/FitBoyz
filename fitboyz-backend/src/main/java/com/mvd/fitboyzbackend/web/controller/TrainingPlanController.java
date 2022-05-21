package com.mvd.fitboyzbackend.web.controller;


import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping("/training-plan")
public class TrainingPlanController {

    private final TrainingPlanService trainingPlanService;

    @PostMapping()
    public ResponseEntity<TrainingPlanDto> postTrainingPlan(@RequestBody TrainingPlanDto trainingPlanDto, @RequestParam Long userId) {
        TrainingPlanDto trainingPlan = trainingPlanService.createTrainingPlan(trainingPlanDto, userId);
        return new ResponseEntity<>(trainingPlan, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<TrainingPlanDto>> getTrainingPlan(@RequestParam Long userId) {
        List<TrainingPlanDto> trainingPlans = trainingPlanService.getTrainingPlans(userId);
        return new ResponseEntity<>(trainingPlans, HttpStatus.OK);
    }
}
