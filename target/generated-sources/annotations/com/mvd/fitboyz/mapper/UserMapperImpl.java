package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.User;
import com.mvd.fitboyz.web.dto.UserDto;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-15T18:41:59+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto userToDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( user.getId() );
        userDto.setEmail( user.getEmail() );
        userDto.setPassword( user.getPassword() );

        return userDto;
    }

    @Override
    public User dtoToUser(UserDto userDto) {
        if ( userDto == null ) {
            return null;
        }

        User user = new User();

        user.setId( userDto.getId() );
        user.setEmail( userDto.getEmail() );
        user.setPassword( userDto.getPassword() );

        return user;
    }
}
