package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@RequiredArgsConstructor
public class UserDbClient {
    private final UserDbRepository userDbRepository;
    public User getUserById(Long id) {
        Optional<User> user = userDbRepository.findById(id);

        return user.get();
    }

    public User getUser(String email, String password){
        return userDbRepository.findByEmailEqualsAndPasswordEquals(email, password);
    }

    public void deleteUser(Long id){
        userDbRepository.deleteById(id);
    }

//    public void addTrainingPlan(TrainingPlan trainingPlan){
//        userDbRepository.deleteById(id);
//    }

    public User saveRecord(User user){
        return userDbRepository.save(user);
    }
}
