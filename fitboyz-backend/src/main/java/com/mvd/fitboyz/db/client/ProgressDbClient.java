package com.mvd.fitboyz.db.client;

import com.mvd.fitboyz.db.model.Progress;
import com.mvd.fitboyz.db.model.TrainingPlan;
import com.mvd.fitboyz.db.repository.ProgressDbRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProgressDbClient {
    private final ProgressDbRepository progressDbRepository;

    public Progress saveRecord(Progress progress){
        return progressDbRepository.save(progress);
    }
    public List<Progress> getProgresses(Long id){
        return progressDbRepository.findByUser_IdEquals(id);
    }
}
