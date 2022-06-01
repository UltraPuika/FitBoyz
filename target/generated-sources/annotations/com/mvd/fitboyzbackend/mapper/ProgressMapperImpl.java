package com.mvd.fitboyzbackend.mapper;

import com.mvd.fitboyzbackend.db.model.Progress;
import com.mvd.fitboyzbackend.web.dto.ProgressDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-31T20:55:36+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14.1 (Amazon.com Inc.)"
)
public class ProgressMapperImpl implements ProgressMapper {

    @Override
    public ProgressDto progressToDto(Progress progress) {
        if ( progress == null ) {
            return null;
        }

        ProgressDto progressDto = new ProgressDto();

        progressDto.setId( progress.getId() );
        progressDto.setName( progress.getName() );
        progressDto.setReps( progress.getReps() );
        progressDto.setAmount( progress.getAmount() );
        progressDto.setDate( progress.getDate() );

        return progressDto;
    }

    @Override
    public Progress dtoToProgress(ProgressDto progressDto) {
        if ( progressDto == null ) {
            return null;
        }

        Progress progress = new Progress();

        progress.setId( progressDto.getId() );
        progress.setName( progressDto.getName() );
        progress.setReps( progressDto.getReps() );
        progress.setAmount( progressDto.getAmount() );
        progress.setDate( progressDto.getDate() );

        return progress;
    }

    @Override
    public List<ProgressDto> progressesToDtos(List<Progress> progresses) {
        if ( progresses == null ) {
            return null;
        }

        List<ProgressDto> list = new ArrayList<ProgressDto>( progresses.size() );
        for ( Progress progress : progresses ) {
            list.add( progressToDto( progress ) );
        }

        return list;
    }
}
