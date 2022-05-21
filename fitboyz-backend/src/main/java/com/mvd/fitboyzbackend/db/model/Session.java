package com.mvd.fitboyzbackend.db.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String intensity;
    @OneToMany(targetEntity = CompletedSession.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "session_id", referencedColumnName = "id")
    private List<CompletedSession> completedSessions;
    @OneToMany(targetEntity = SessionExercise.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "session_id", referencedColumnName = "id")
    private List<SessionExercise> sessionExercises;
    @ManyToOne
    private TrainingPlan trainingPlan;

}
