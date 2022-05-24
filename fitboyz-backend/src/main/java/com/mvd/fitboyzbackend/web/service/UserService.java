package com.mvd.fitboyzbackend.web.service;


import com.mvd.fitboyzbackend.db.client.*;
import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.manipulator.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDbClient userDbClient;
    private final UserManipulator userManipulator;

    public UserDto getUserDto(String username, String password){
        User user = userDbClient.getUser(username, password);
        return userManipulator.convertUserToDto(user);
    }

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
