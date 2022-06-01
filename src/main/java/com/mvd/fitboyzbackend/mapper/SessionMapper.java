package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import org.mapstruct.*;
import org.mapstruct.factory.*;

@Mapper
public interface SessionMapper {
    SessionMapper INSTANCE = Mappers.getMapper( SessionMapper.class );

    SessionDto sessionToDto(Session session);
}
