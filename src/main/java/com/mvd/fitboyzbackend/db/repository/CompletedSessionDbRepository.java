package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CompletedSessionDbRepository extends PagingAndSortingRepository<CompletedSession, Long>{

    List<CompletedSession> findBySession_TrainingPlan_User_IdEqualsOrderByDateDesc(Long id);

    long deleteByIdEquals(Long id);

}

