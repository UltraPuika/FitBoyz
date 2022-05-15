package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.Session;
import com.mvd.fitboyz.db.repository.SessionDbRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SessionDbClient {
    private final SessionDbRepository sessionDbRepository;
    public Session getSessionById(Long id){
        Optional<Session> session = sessionDbRepository.findById(id);
        return session.get();
    }
}
