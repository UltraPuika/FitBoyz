package com.mvd.fitboyz.web.service;

import com.mvd.fitboyz.db.client.UserDbClient;
import com.mvd.fitboyz.db.model.User;
import com.mvd.fitboyz.web.dto.UserDto;
import com.mvd.fitboyz.web.manipulator.UserManipulator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDbClient userDbClient;
    private final UserManipulator userManipulator;

    public UserDto getUserDtoById(Long id) {
        User userDbEntity = userDbClient.getUserById(id);
        return userManipulator.convertUserToDto(userDbEntity);
    }

    public UserDto createUser(UserDto postUser) {
        User userDbEntity = userManipulator.convertDtoToUser(postUser);
        userDbEntity = userDbClient.saveRecord(userDbEntity);
        return userManipulator.convertUserToDto(userDbEntity);
    }
}
