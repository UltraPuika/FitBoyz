package com.mvd.fitboyz.web.controller;

import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import com.mvd.fitboyz.web.dto.UserDto;
import com.mvd.fitboyz.web.service.TrainingPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
