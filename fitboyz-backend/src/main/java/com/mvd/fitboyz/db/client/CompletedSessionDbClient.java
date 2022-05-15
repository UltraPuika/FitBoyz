package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.CompletedSession;
import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.db.repository.CompletedSessionDbRepository;
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
        return completedSessionDbRepository.findBySession_TrainingPlan_User_IdEquals(id);
    }
}
