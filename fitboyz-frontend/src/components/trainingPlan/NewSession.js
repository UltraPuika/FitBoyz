import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaPlus, FaMinus } from "react-icons/fa"

const NewSession = ({
  session,
  handleChangeS,
  handleRemoveSession,
  setSessions,
  sessions,
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
    <div className="new-container" key={session.id}>
        <label className="header-item">
          Session Title:
          <input
            className="add-main"
            type="text"
            name="sessionTitle"
            value={session.sessionTitle}
            onChange={(event) => handleChangeS(session.id, event)}
          />
          {sessions.length > 1 && (
            <FaMinus
              className="icon header-item"
              onClick={() => handleRemoveSession(session.id)}
            />
          )}
        </label>
      <label className="header-item">
        Intensity:
        <select
          name="intensity"
          onChange={(event) => handleChangeS(session.id, event)}
          value={session.intensity}
        >
          <option value="Not specified">Not specified</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <table>
        <thead>
          <tr className="container">
            <th>EXERCISE</th>
            <th>SETS</th>
            <th>REPS</th>
          </tr>
        </thead>
        <tbody>
          {sessionExercises.map((exercise, index) => (
            <tr key={index} className="container">
              <td>
                <label>
                  <input
                    className="exer-input"
                    type="text"
                    name="name"
                    value={exercise.name}
                    onChange={(event) =>
                      handleChangeE(session.id, exercise.id, event)
                    }
                  />
                </label>
              </td>
              <td>
                <label>
                  <input
                    className="exer-input"
                    type="number"
                    name="sets"
                    value={exercise.sets}
                    onChange={(event) =>
                      handleChangeE(session.id, exercise.id, event)
                    }
                  />
                </label>
              </td>
              <td>
                <label>
                  <input
                    className="exer-input"
                    type="number"
                    name="reps"
                    value={exercise.reps}
                    onChange={(event) =>
                      handleChangeE(session.id, exercise.id, event)
                    }
                  />
                </label>
              </td>
              {sessionExercises.length > 1 && (
                <td>
                  <FaMinus
                    className="icon"
                    onClick={() => handleRemoveExercise(exercise.id)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <FaPlus className="icon-1" onClick={handleAddExercise} />
      </div>
    </div>
  )
}

export default NewSession
