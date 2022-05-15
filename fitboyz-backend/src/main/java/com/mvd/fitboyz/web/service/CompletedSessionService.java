package com.mvd.fitboyz.web.service;

import com.mvd.fitboyz.db.client.CompletedSessionDbClient;
import com.mvd.fitboyz.db.client.SessionDbClient;
import com.mvd.fitboyz.db.model.*;
import com.mvd.fitboyz.web.dto.CompletedSessionDto;
import com.mvd.fitboyz.web.manipulator.CompletedSessionManipulator;
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
