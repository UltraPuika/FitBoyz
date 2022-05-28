package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
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
    public long deleteEntity(Long id){
        return sessionDbRepository.deleteByIdEquals(id);
    }
}
