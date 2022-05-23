import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import WorkoutService from "../../services/WorkoutService"

const NewWorkout = () => {
  const [workout, setWorkout] = useState({})
  const [date, setDate] = useState("")

  const [completedExercises, setCompletedExercises] = useState([
    {
      id: uuidv4(),
      name: "",
      completedSets: "",
      completedReps: "",
      amount: "",
      unit: "",
    },
  ])

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
// add session id
    WorkoutService.createWorkout(workout).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" name="date" value={date} onChange={handleChange} />
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
                type="text"
                name="completedSets"
                value={exercise.completedSets}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Completed Reps:
              <input
                type="text"
                name="completedReps"
                value={exercise.completedReps}
                onChange={(event) => handleChangeCE(exercise.id, event)}
              />
            </label>
            <label>
              Amount:
              <input
                type="text"
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
              disabled={exercise.length === 1}
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
