package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.User;
import com.mvd.fitboyz.web.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );

    UserDto userToDto(User user);

    User dtoToUser(UserDto userDto);
}
