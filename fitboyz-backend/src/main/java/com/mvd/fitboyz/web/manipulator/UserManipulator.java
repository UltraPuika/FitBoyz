package com.mvd.fitboyz.web.manipulator;

import com.mvd.fitboyz.db.model.User;
import com.mvd.fitboyz.mapper.UserMapper;
import com.mvd.fitboyz.web.dto.UserDto;
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
