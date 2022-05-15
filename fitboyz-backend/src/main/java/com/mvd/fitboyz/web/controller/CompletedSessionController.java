package com.mvd.fitboyz.web.controller;

import com.mvd.fitboyz.web.dto.CompletedSessionDto;
import com.mvd.fitboyz.web.dto.TrainingPlanDto;
import com.mvd.fitboyz.web.service.CompletedSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/completed-session")
public class CompletedSessionController {

    private final CompletedSessionService completedSessionService;

    @PostMapping()
    public ResponseEntity<CompletedSessionDto> postCompletedSession(@RequestBody CompletedSessionDto completedSessionDto, @RequestParam Long sessionId) {
        CompletedSessionDto completedSession = completedSessionService.createCompletedSession(completedSessionDto, sessionId);
        return new ResponseEntity<>(completedSession, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<CompletedSessionDto>> getTrainingPlan(@RequestParam Long userId) {
        List<CompletedSessionDto> completedSessions = completedSessionService.getCompletedSessions(userId);
        return new ResponseEntity<>(completedSessions, HttpStatus.OK);
    }
}
