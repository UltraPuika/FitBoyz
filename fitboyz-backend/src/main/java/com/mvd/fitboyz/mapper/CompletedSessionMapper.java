package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.CompletedSession;
import com.mvd.fitboyz.web.dto.CompletedSessionDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface CompletedSessionMapper {
    CompletedSessionMapper INSTANCE = Mappers.getMapper( CompletedSessionMapper.class );

    CompletedSessionDto completedSessionToDto(CompletedSession completedSession);

    CompletedSession dtoToCompletedSession(CompletedSessionDto completedSessionDto);

    List<CompletedSessionDto> completedSessionsToDtos(List<CompletedSession> completedSessions);
}
