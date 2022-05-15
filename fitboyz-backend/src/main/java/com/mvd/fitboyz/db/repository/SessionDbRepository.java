package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.Session;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SessionDbRepository extends PagingAndSortingRepository<Session, Long> {
}
