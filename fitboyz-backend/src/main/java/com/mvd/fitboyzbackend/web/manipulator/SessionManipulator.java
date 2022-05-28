package com.mvd.fitboyzbackend.web.manipulator;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.mapper.*;
import com.mvd.fitboyzbackend.web.dto.*;
import lombok.*;
import org.springframework.stereotype.*;

@Service
@RequiredArgsConstructor
public class SessionManipulator {
    public SessionDto convertSessionToDto(Session session) {
        return SessionMapper.INSTANCE.sessionToDto(session);
    }
}
