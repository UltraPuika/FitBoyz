package com.mvd.fitboyz.mapper;

import com.mvd.fitboyz.db.model.Progress;
import com.mvd.fitboyz.web.dto.ProgressDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-15T18:41:59+0300",
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
        progressDto.setAmount( progress.getAmount() );
        progressDto.setUnit( progress.getUnit() );
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
        progress.setAmount( progressDto.getAmount() );
        progress.setUnit( progressDto.getUnit() );
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
