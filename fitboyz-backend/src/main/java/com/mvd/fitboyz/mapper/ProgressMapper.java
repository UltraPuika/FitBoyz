package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.Progress;
import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.web.dto.ProgressDto;
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
