package com.mvd.fitboyzbackend.web.manipulator;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.mapper.*;
import com.mvd.fitboyzbackend.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserManipulator {

    public UserDto convertUserToDto(User user) {
        return UserMapper.INSTANCE.userToDto(user);
    }

    public User convertDtoToUser(UserDto userDto) {
        return UserMapper.INSTANCE.dtoToUser(userDto);
    }

}
