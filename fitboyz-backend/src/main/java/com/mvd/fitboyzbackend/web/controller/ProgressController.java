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
@RequestMapping("/progress")
public class ProgressController {

    private final ProgressService progressService;

    @PostMapping()
    public ResponseEntity<ProgressDto> postProgress(@RequestBody ProgressDto progressDto, @RequestParam Long userId) {
        ProgressDto progress = progressService.createProgress(progressDto, userId);
        return new ResponseEntity<>(progress, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<ProgressDto>> getProgress(@RequestParam Long userId) {
        List<ProgressDto> progresses = progressService.getProgress(userId);
        return new ResponseEntity<>(progresses, HttpStatus.OK);
    }
    @GetMapping("/exercises")
    public ResponseEntity<List<CompletedExerciseDto>> getExerciseProgress(@RequestParam String name,@RequestParam Long userId) {
        List<CompletedExerciseDto> completedExerciseDtos = progressService.getExerciseProgress(name, userId);
        return new ResponseEntity<>(completedExerciseDtos, HttpStatus.OK);
    }
}
