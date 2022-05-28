import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import WorkoutService from "../../services/WorkoutService"
import TrainingPlanService from "../../services/TrainingPlanService"

const NewWorkout = () => {
  const [workout, setWorkout] = useState({})
  const [date, setDate] = useState("")
  const [completedExercises, setCompletedExercises] = useState([])
  const [sessionName, setSessionName] = useState()

  const { sessionId } = useParams()

  useEffect(() => {
    setToday()
    getSession(sessionId)
  }, [])

  const setToday = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    const monthString = month < 10 ? "0" + month : month
    const currentDate = year + "-" + monthString + "-" + day
    setDate(currentDate)
  }

  const getSession = (id) => {
    TrainingPlanService.getSession(id).then((res) => {
      setSessionName(res.data.sessionTitle)
      let exercises = []
      res.data.sessionExercises.forEach((exercise) => {
        exercises = [
          ...exercises,
          {
            id: uuidv4(),
            name: exercise.name,
            completedSets: exercise.sets,
            completedReps: exercise.reps,
            amount: "",
            unit: "",
          },
        ]
      })
      setCompletedExercises(exercises)
      setWorkout({ date, completedExercises })
    })
  }

  const handleChange = (event) => {
    if (event.target.name === "date") {
      setDate(event.target.value)
    }
    setWorkout({ date, completedExercises })
  }

  const handleChangeCE = (id, event) => {
    const newCompletedExercises = completedExercises.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i
    })
    setCompletedExercises(newCompletedExercises)
    setWorkout({ date, completedExercises })
  }

  const handleAddFields = () => {
    setCompletedExercises([
      ...completedExercises,
      {
        id: uuidv4(),
        name: "",
        completedSets: "",
        completedReps: "",
        amount: "",
        unit: "",
      },
    ])
  }

  const handleRemoveFields = (id) => {
    const values = [...completedExercises]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setCompletedExercises(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    workout.completedExercises.forEach((element) => {
      delete element.id
    })
    WorkoutService.createWorkout(sessionId, workout).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <h1>{sessionName} workout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={handleChange} />
        </label>
        {completedExercises.map((exercise) => (
          <div key={exercise.id}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={exercise.name}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Completed Sets:
              <input
                type="number"
                name="completedSets"
                value={exercise.completedSets}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Completed Reps:
              <input
                type="number"
                name="completedReps"
                value={exercise.completedReps}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={exercise.amount}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Unit:
              <input
                type="text"
                name="unit"
                value={exercise.unit}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <button
              type="button"
              disabled={completedExercises.length === 1}
              onClick={() => handleRemoveFields(exercise.id)}
            >
              remove
            </button>
            <button type="button" onClick={handleAddFields}>
              add
            </button>
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewWorkout
