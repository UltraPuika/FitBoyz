package com.mvd.fitboyz.db.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CompletedExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private Integer completedSets;
    private Integer completedReps;
    private Integer amount;
    private String unit;
    @ManyToOne
    private CompletedSession completedSession;
}
