package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.Progress;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ProgressDbRepository extends PagingAndSortingRepository<Progress, Long> {
    List<Progress> findByUser_IdEquals(Long id);


}
