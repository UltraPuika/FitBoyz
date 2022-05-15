package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.db.model.User;
import com.mvd.fitboyz.db.repository.UserDbRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserDbClient {
    private final UserDbRepository userDbRepository;
    public User getUserById(Long id) {
        Optional<User> user = userDbRepository.findById(id);

        return user.get();
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
