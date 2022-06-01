package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CompletedSessionDbClient {
    private final CompletedSessionDbRepository completedSessionDbRepository;
    public CompletedSession saveRecord(CompletedSession completedSession){
        return completedSessionDbRepository.save(completedSession);
    }
    public List<CompletedSession> getCompletedSessions(Long id){
        return completedSessionDbRepository.findBySession_TrainingPlan_User_IdEqualsOrderByDateDesc(id);
    }

    public long deleteEntity(Long id){
        return completedSessionDbRepository.deleteByIdEquals(id);
    }
}
