package com.mvd.fitboyz.db.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String password;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<TrainingPlan> trainingPlans;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Progress> progresses;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Exercise> exercises;
}
