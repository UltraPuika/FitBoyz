package com.mvd.fitboyzbackend.web.manipulator;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.mapper.*;
import com.mvd.fitboyzbackend.web.dto.*;
import lombok.RequiredArgsConstructor;
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
