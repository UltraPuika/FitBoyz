package com.mvd.fitboyzbackend.web.controller;


import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/training-plan")
public class TrainingPlanController {

    private final TrainingPlanService trainingPlanService;

    @PostMapping()
    public ResponseEntity<TrainingPlanDto> postTrainingPlan(@RequestBody TrainingPlanDto trainingPlanDto, @RequestParam Long userId) {
        TrainingPlanDto trainingPlan = trainingPlanService.createTrainingPlan(trainingPlanDto, userId);
        return new ResponseEntity<>(trainingPlan, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<TrainingPlanDto>> getTrainingPlans(@RequestParam Long userId) {
        List<TrainingPlanDto> trainingPlans = trainingPlanService.getTrainingPlans(userId);
        return new ResponseEntity<>(trainingPlans, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainingPlanDto> getTrainingPlan(@PathVariable("id") Long id) {
        TrainingPlanDto trainingPlan = trainingPlanService.getTrainingPlan(id);
        return new ResponseEntity<>(trainingPlan, HttpStatus.OK);
    }

    @GetMapping("/current")
    public ResponseEntity<TrainingPlanDto> getCurrentTrainingPlan(@RequestParam Long userId) {
        TrainingPlanDto trainingPlan = trainingPlanService.getCurrentTrainingPlan(userId);
        return new ResponseEntity<>(trainingPlan, HttpStatus.OK);
    }

    @PutMapping("/current/{id}")
    public ResponseEntity<?> updateCurrent(@PathVariable("id") Long id,@RequestParam Long userId) {
        trainingPlanService.updateCurrentPlan(id, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/session/{id}")
    public ResponseEntity<SessionDto> getSession(@PathVariable("id") Long id) {
        SessionDto session = trainingPlanService.getSession(id);
        return new ResponseEntity<>(session, HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteTrainingPlan(@PathVariable("id") Long id) {
        trainingPlanService.deleteTrainingPlan(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/session/{id}")
    public ResponseEntity<Long> deleteSession(@PathVariable("id") Long id) {
        trainingPlanService.deleteSession(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/exercise/{id}")
    public ResponseEntity<Long> deleteExercise(@PathVariable("id") Long id) {
        trainingPlanService.deleteExercise(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
