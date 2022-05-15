package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.CompletedSession;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CompletedSessionDbRepository extends PagingAndSortingRepository<CompletedSession, Long>{
    List<CompletedSession> findBySession_TrainingPlan_User_IdEquals(Long id);

}

