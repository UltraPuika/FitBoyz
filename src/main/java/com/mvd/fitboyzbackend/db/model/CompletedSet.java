package com.mvd.fitboyzbackend.db.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CompletedSet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer completedReps;
    private Integer amount;
    @ManyToOne
    private CompletedExercise completedExercise;
}
