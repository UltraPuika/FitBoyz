package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ProgressDbRepository extends PagingAndSortingRepository<Progress, Long> {
    List<Progress> findByUser_IdEquals(Long id);


}
