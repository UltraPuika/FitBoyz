package com.mvd.fitboyzbackend.db.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CompletedSession {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDate date;
    @OneToMany(targetEntity = CompletedExercise.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "completed_session_id", referencedColumnName = "id")
    private List<CompletedExercise> completedExercises;
    @ManyToOne
    private Session session;
}
