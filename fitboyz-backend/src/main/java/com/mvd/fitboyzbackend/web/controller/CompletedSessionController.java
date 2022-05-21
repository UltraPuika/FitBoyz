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
