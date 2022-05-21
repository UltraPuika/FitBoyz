package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface CompletedSessionMapper {
    CompletedSessionMapper INSTANCE = Mappers.getMapper( CompletedSessionMapper.class );

    CompletedSessionDto completedSessionToDto(CompletedSession completedSession);

    CompletedSession dtoToCompletedSession(CompletedSessionDto completedSessionDto);

    List<CompletedSessionDto> completedSessionsToDtos(List<CompletedSession> completedSessions);
}
