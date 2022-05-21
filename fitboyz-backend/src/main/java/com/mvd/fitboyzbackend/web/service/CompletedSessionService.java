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

    public CompletedSessionDto createCompletedSession(CompletedSessionDto completedSessionDto, Long sessionId) {
        CompletedSession completedSession = completedSessionManipulator.convertDtoToCompletedSession(completedSessionDto);
        Session session = sessionDbClient.getSessionById(sessionId);
        completedSession.setSession(session);

        completedSession = completedSessionDbClient.saveRecord(completedSession);

        return completedSessionManipulator.convertCompletedSessionToDto(completedSession);
    }
    public List<CompletedSessionDto> getCompletedSessions(Long userId) {
        List<CompletedSession> completedSessions = completedSessionDbClient.getCompletedSessions(userId);
        return completedSessionManipulator.convertCompletedSessionsToDtos(completedSessions);
    }
}
