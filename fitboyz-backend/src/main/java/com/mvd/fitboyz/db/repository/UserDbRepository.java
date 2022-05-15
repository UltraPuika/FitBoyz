package com.mvd.fitboyz.db.repository;

import com.mvd.fitboyz.db.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface UserDbRepository extends PagingAndSortingRepository<User, Long> {

}
