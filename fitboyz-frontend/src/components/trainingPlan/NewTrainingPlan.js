import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TrainingPlanService from "../../services/TrainingPlanService"
import NewSession from "./NewSession"
import Navbar from "../Navbar"

const NewTrainingPlan = () => {
  const [trainingPlan, setTrainingPlan] = useState({})
  const [title, setTitle] = useState("")
  const [planLength, setPlanLength] = useState("")
  const [numberOfSessions, setNumberOfSessions] = useState("")

  const [sessions, setSessions] = useState([
    {
      id: uuidv4(),
      sessionTitle: "",
      intensity: "",
      sessionExercises: "",
    },
  ])

  const handleChangeS = (id, event) => {
    const newSessions = sessions.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i
    })
    setSessions(newSessions)
    setTrainingPlan({
      title,
      planLength,
      sessions,
      numberOfSessions,
    })
  }

  const handleAddSession = () => {
    setSessions([
      ...sessions,
      {
        id: uuidv4(),
        sessionTitle: "",
        intensity: "",
        sessionExercises: [],
      },
    ])
  }

  const handleRemoveSession = (id) => {
    const values = [...sessions]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setSessions(values)
  }

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value)
    } else if (event.target.name === "planLength") {
      setPlanLength(event.target.value)
    } else if (event.target.name === "numberOfSessions") {
      setNumberOfSessions(event.target.value)
    }
    setTrainingPlan({
      title,
      planLength,
      sessions,
      numberOfSessions,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = parseInt(sessionStorage.getItem("token"))
    trainingPlan.sessions.forEach((session) => {
      delete session.id
      session.sessionExercises.forEach((exercise) => {
        delete exercise.id
      })
    })
    TrainingPlanService.createTrainingPlan(id, {
      title,
      planLength,
      sessions,
      numberOfSessions,
    }).then((res) => {
      window.location.href = "/training-plan"
    })
  }

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
              session={session}
              handleChangeS={handleChangeS}
              handleRemoveSession={handleRemoveSession}
              setSessions={setSessions}
              setTrainingPlan={setTrainingPlan}
              sessions={sessions}
              trainingPlan={trainingPlan}
            />
          ))}
          <button type="button" onClick={handleAddSession}>
            Add session
          </button>
          <button type="submit">
            Save Plan
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewTrainingPlan
