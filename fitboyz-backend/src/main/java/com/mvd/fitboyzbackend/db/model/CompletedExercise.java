package com.mvd.fitboyzbackend.db.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CompletedExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToMany(targetEntity = CompletedSet.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "completed_exercise_id", referencedColumnName = "id")
    private List<CompletedSet> sets;
    @ManyToOne
    private CompletedSession completedSession;
}
