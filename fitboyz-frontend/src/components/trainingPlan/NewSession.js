import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const NewSession = ({
  session,
  handleChangeS,
  handleRemoveSession,
  setSessions,
  setTrainingPlan,
  sessions,
  trainingPlan,
}) => {
  const [sessionExercises, setSessionExercises] = useState([
    {
      id: uuidv4(),
      name: "",
      sets: "",
      reps: "",
    },
  ])

  const handleChangeE = (sesId, id, event) => {
    const newSessionExercises = sessionExercises.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i
    })
    setSessionExercises(newSessionExercises)

    const tempSessions = sessions
    tempSessions.forEach((temp) => {
      if (sesId === temp.id) {
        temp.sessionExercises = sessionExercises
      }
    })
    setSessions(tempSessions)
    const tempTrainingPlan = trainingPlan
    tempTrainingPlan.sessions = sessions
    setTrainingPlan(tempTrainingPlan)
  }

  const handleAddExercise = () => {
    setSessionExercises([
      ...sessionExercises,
      {
        id: uuidv4(),
        name: "",
        sets: "",
        reps: "",
      },
    ])
  }

  const handleRemoveExercise = (id) => {
    const values = [...sessionExercises]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setSessionExercises(values)
  }

  return (
    <div key={session.id}>
      <label>
        Session Title:
        <input
          type="text"
          name="sessionTitle"
          value={session.sessionTitle}
          onChange={(event) => handleChangeS(session.id, event)}
        />
      </label>
      <label>
        Intensity:
        <select
          name="intensity"
          onChange={(event) => handleChangeS(session.id, event)}
          value={session.intensity}
        >
          <option value="">Not specified</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      {sessionExercises.map((exercise) => (
        <div key={exercise.id}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={exercise.name}
              onChange={(event) =>
                handleChangeE(session.id, exercise.id, event)
              }
            />
          </label>
          <label>
            Sets:
            <input
              type="number"
              name="sets"
              value={exercise.sets}
              onChange={(event) =>
                handleChangeE(session.id, exercise.id, event)
              }
            />
          </label>
          <label>
            Reps:
            <input
              type="number"
              name="reps"
              value={exercise.reps}
              onChange={(event) =>
                handleChangeE(session.id, exercise.id, event)
              }
            />
          </label>
          <button
            type="button"
            disabled={sessionExercises.length === 1}
            onClick={() => handleRemoveExercise(exercise.id)}
          >
            remove exer
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddExercise}>
        add exer
      </button>
      <button
        type="button"
        disabled={sessions.length === 1}
        onClick={() => handleRemoveSession(session.id)}
      >
        remove sess
      </button>
      
    </div>
  )
}

export default NewSession
