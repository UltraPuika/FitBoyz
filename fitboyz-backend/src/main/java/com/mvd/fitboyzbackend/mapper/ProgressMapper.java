package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.web.dto.*;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ProgressMapper {
    ProgressMapper INSTANCE = Mappers.getMapper( ProgressMapper.class );

    ProgressDto progressToDto(Progress progress);

    Progress dtoToProgress(ProgressDto progressDto);

    List<ProgressDto> progressesToDtos(List<Progress> progresses);
}
