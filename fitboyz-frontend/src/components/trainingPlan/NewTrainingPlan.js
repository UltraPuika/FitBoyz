import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TrainingPlanService from "../../services/TrainingPlanService";
import NewSession from "./NewSession";
import Navbar from "../Navbar";

const NewTrainingPlan = () => {
  const [title, setTitle] = useState("");
  const [planLength, setPlanLength] = useState("");
  const [numberOfSessions, setNumberOfSessions] = useState("");

  const [sessions, setSessions] = useState([
    {
      id: uuidv4(),
      sessionTitle: "",
      intensity: "Not Specified",
      sessionExercises: [{
        id: uuidv4(),
        name: "",
        sets: "",
        reps: "",
      }],
    },
  ]);

  const handleChangeS = (id, event) => {
    const newSessions = sessions.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setSessions(newSessions);
  };

  const handleAddSession = () => {
    setSessions([
      ...sessions,
      {
        id: uuidv4(),
        sessionTitle: "",
        intensity: "Not Specified",
        sessionExercises: [
          {
            id: uuidv4(),
            name: "",
            sets: "",
            reps: "",
          },
        ],
      },
    ]);
  };

  const handleRemoveSession = (id) => {
    const values = [...sessions];
   const index = values.findIndex((value) => value.id === id);
    values[index].sessionExercises = []
    values.splice(index, 1); 
    setSessions(values);

  };

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "planLength") {
      setPlanLength(event.target.value);
    } else if (event.target.name === "numberOfSessions") {
      setNumberOfSessions(event.target.value);
    }
  };

  const checkIfEmpty = ({ title, planLength, sessions, numberOfSessions }) => {
    let test = false;
    if (!title || !planLength || !numberOfSessions) {
      test = true;
    } else {
      if (!sessions) test = true;
      sessions.forEach(({ sessionTitle, sessionExercises }) => {
        if (!sessionTitle) {
          test = true;
        } else {
          if (!sessionExercises) test = true
          sessionExercises.forEach(({ sets, reps, name }) => {
            if (!sets || !reps || !name ) {
              test = true;
            }
          });
        }
      });
    }
    return test;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfEmpty({
      title,
      planLength,
      sessions,
      numberOfSessions,
    })) {
      console.log({
        title,
        planLength,
        sessions,
        numberOfSessions,
      });
      alert("Please fill all fields!");
    } else {
      const id = parseInt(sessionStorage.getItem("token"));
      sessions.forEach((session) => {
        delete session.id;
        session.sessionExercises.forEach((exercise) => {
          delete exercise.id;
        });
      });
      TrainingPlanService.createTrainingPlan(id, {
        title,
        planLength,
        sessions,
        numberOfSessions,
      }).then((res) => {
        window.location.href = "/#/training-plan";
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="new-main-container">
        <h1 className="title">New Training Plan</h1>
        <form onSubmit={handleSubmit}>
          <label className="title-name">
            Title:
            <input
              className="add-main"
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </label>
          <label className="small">
            Plan Length in weeks:
            <input
              className="add-main-small"
              type="number"
              name="planLength"
              value={planLength}
              onChange={handleChange}
            />
          </label>
          <label className="small">
            Number of sessions per week:
            <input
              className="add-main-small"
              type="number"
              name="numberOfSessions"
              value={numberOfSessions}
              onChange={handleChange}
            />
          </label>
          {sessions.map((session) => (
            <NewSession
            key={session.id}
              session={session}
              handleChangeS={handleChangeS}
              handleRemoveSession={handleRemoveSession}
              setSessions={setSessions}
              sessions={sessions}
            />
          ))}
          <button type="button" onClick={handleAddSession}>
            Add session
          </button>
          <button type="submit">Save Plan</button>
        </form>
      </div>
    </div>
  );
};

export default NewTrainingPlan;
