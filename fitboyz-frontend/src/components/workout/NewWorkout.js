import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import WorkoutService from "../../services/WorkoutService"
import TrainingPlanService from "../../services/TrainingPlanService"
import Navbar from "../Navbar"
import NewExercise from "./NewExercise"

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const monthString = month < 10 ? "0" + month : month
const currentDate = year + "-" + monthString + "-" + day

const NewWorkout = () => {
  const [workout, setWorkout] = useState({})
  const [date, setDate] = useState(currentDate)

  const [completedExercises, setCompletedExercises] = useState([])

  const [sessionName, setSessionName] = useState()
  const { sessionId } = useParams()

  useEffect(() => {
    getSession(sessionId)
  }, [])

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
            sets: Array.apply(null, Array(exercise.sets)).map(() => {
              return {
                id: uuidv4(),
                completedReps: exercise.reps,
                amount: "",
              }
            }),
          },
        ]
      })
      setCompletedExercises(exercises)
      setWorkout({ date, completedExercises })
    })
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

  const handleAddExercise = () => {
    setCompletedExercises([
      ...completedExercises,
      {
        id: uuidv4(),
        name: "",
        sets: [
          {
            id: uuidv4(),
            completedReps: "",
            amount: "",
          },
        ],
      },
    ])
  }

  const handleRemoveExercise = (id) => {
    const values = [...completedExercises]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setCompletedExercises(values)
  }

  const handleChange = (event) => {
    if (event.target.name === "date") {
      setDate(event.target.value)
    }
    setWorkout({ date, completedExercises })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    workout.completedExercises.forEach((exercise) => {
      delete exercise.id
      exercise.sets.forEach((set) => {
        delete set.id
      })
    })

    WorkoutService.createWorkout(sessionId, workout).then((res) => {
      window.location.href = "/"
    })
  }

  return (
    <div>
      <Navbar />
      <div className="new-workout">
        <h1 className="title">{sessionName} workout</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              className="add-workout"
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </label>
          {completedExercises.map((exercise) => (
            <NewExercise
              key={exercise.id}
              exercise={exercise}
              handleChangeCE={handleChangeCE}
              handleRemoveExercise={handleRemoveExercise}
              setCompletedExercises={setCompletedExercises}
              setWorkout={setWorkout}
              completedExercises={completedExercises}
              workout={workout}
            />
          ))}
          <button type="button" onClick={handleAddExercise}>
            Add exercise
          </button>
          <button type="submit">Save Workout</button>
        </form>
      </div>
    </div>
  )
}

export default NewWorkout
