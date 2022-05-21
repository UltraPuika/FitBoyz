package com.mvd.fitboyzbackend.db.repository;

import com.mvd.fitboyzbackend.db.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDbRepository extends PagingAndSortingRepository<User, Long> {

}
