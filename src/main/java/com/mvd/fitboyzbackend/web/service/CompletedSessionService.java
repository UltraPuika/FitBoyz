package com.mvd.fitboyzbackend.web.service;

import com.mvd.fitboyzbackend.db.client.*;
import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.manipulator.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompletedSessionService {
    private final CompletedSessionDbClient completedSessionDbClient;
    private final CompletedSessionManipulator completedSessionManipulator;
    private final SessionDbClient sessionDbClient;
    private final ProgressDbClient progressDbClient;
    private final ProgressManipulator progressManipulator;

    public CompletedSessionDto createCompletedSession(CompletedSessionDto completedSessionDto, Long sessionId) {
        CompletedSession completedSession = completedSessionManipulator.convertDtoToCompletedSession(completedSessionDto);
        Session session = sessionDbClient.getSessionById(sessionId);
        completedSession.setSession(session);

        completedSession = completedSessionDbClient.saveRecord(completedSession);


        for (CompletedExercise completedExercise: completedSession.getCompletedExercises()) {
            for (CompletedSet completedSet: completedExercise.getSets()) {
                Progress progress = new Progress();
                progress.setUser(completedSession.getSession().getTrainingPlan().getUser());
                progress.setDate(completedSession.getDate());
                progress.setName(completedExercise.getName());
                progress.setAmount(completedSet.getAmount());
                progress.setReps(completedSet.getCompletedReps());
                progressDbClient.saveRecord(progress);
            }
        }

        return completedSessionManipulator.convertCompletedSessionToDto(completedSession);
    }
    public List<CompletedSessionDto> getCompletedSessions(Long userId) {
        List<CompletedSession> completedSessions = completedSessionDbClient.getCompletedSessions(userId);
        return completedSessionManipulator.convertCompletedSessionsToDtos(completedSessions);
    }
    public void deleteCompletedSession(Long id) {
        completedSessionDbClient.deleteEntity(id);
    }
}
