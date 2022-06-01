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
public class TrainingPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private Integer planLength;
    private Integer NumberOfSessions;
    private Boolean isCurrent;
    private LocalDate date;
    @ManyToOne
    private User user;
    @OneToMany(targetEntity = Session.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "training_plan_id", referencedColumnName = "id")
    private List<Session> sessions;
}
