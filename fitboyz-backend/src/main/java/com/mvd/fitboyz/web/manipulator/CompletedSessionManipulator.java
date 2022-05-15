package com.mvd.fitboyz.web.manipulator;

import com.mvd.fitboyz.db.model.CompletedSession;
import com.mvd.fitboyz.mapper.CompletedSessionMapper;
import com.mvd.fitboyz.web.dto.CompletedSessionDto;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompletedSessionManipulator {

    public List<CompletedSessionDto> convertCompletedSessionsToDtos(List<CompletedSession> sessionList){
        return CompletedSessionMapper.INSTANCE.completedSessionsToDtos(sessionList);
    }
    public CompletedSessionDto convertCompletedSessionToDto(CompletedSession session) {
        return CompletedSessionMapper.INSTANCE.completedSessionToDto(session);
    }
    public CompletedSession convertDtoToCompletedSession(CompletedSessionDto sessionDto) {
        return CompletedSessionMapper.INSTANCE.dtoToCompletedSession(sessionDto);
    }
}
