import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const NewSession = ({
  session,
  handleChangeS,
  handleRemoveSession,
  handleAddSession,
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
    tempSessions.map((temp) => {
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
    <div>
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
        <input
          type="text"
          name="intensity"
          value={session.intensity}
          onChange={(event) => handleChangeS(session.id, event)}
        />
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
              type="text"
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
              type="text"
              name="reps"
              value={exercise.reps}
              onChange={(event) =>
                handleChangeE(session.id, exercise.id, event)
              }
            />
          </label>
          <button
            type="button"
            disabled={session.length === 1}
            onClick={() => handleRemoveExercise(exercise.id)}
          >
            remove exer
          </button>
          <button type="button" onClick={handleAddExercise}>
            add exer
          </button>
        </div>
      ))}
      <button
        type="button"
        disabled={session.length === 1}
        onClick={() => handleRemoveSession(session.id)}
      >
        remove sess
      </button>
      <button type="button" onClick={handleAddSession}>
        add sess
      </button>
    </div>
  )
}

export default NewSession
