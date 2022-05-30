import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const NewExercise = ({
  exercise,
  handleChangeCE,
  handleRemoveExercise,
  setCompletedExercises,
  setWorkout,
  completedExercises,
  workout}
) => {
  useEffect(() => {
    console.log(exercise)
  }, [])
  const [sets, setSets] = useState(exercise.sets)

  const handleChangeS = (exerId, id, event) => {
    const newSets = sets.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i
    })
    setSets(newSets)

    const tempExercises = completedExercises
    tempExercises.forEach((temp) => {
      if (exerId === temp.id) {
        temp.sets = sets
      }
    })
    setCompletedExercises(tempExercises)
    const tempWorkout = workout
    tempWorkout.completedExercises = completedExercises
    setWorkout(tempWorkout)
  }

  const handleAddSet = () => {
    setSets([
      ...sets,
      {
        id: uuidv4(),
        completedReps: "",
        amount: "",
      },
    ])
  }

  const handleRemoveSet = (id) => {
    const values = [...sets]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setSets(values)
  }

  return (
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
      {sets.map((set) => {
        return (
          <div>
            <label>
              Completed Reps:
              <input
                type="number"
                name="completedReps"
                value={set.completedReps}
                onChange={(event) => handleChangeS(exercise.id, set.id, event)}
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={set.amount}
                onChange={(event) => handleChangeS(exercise.id, set.id, event)}
              />
            </label>
            <button
              type="button"
              disabled={sets.length === 1}
              onClick={() => handleRemoveSet(set.id)}
            >
              remove
            </button>
          </div>
        )
      })}
      <button type="button" onClick={handleAddSet}>
        add set
      </button>
      <button
        type="button"
        disabled={completedExercises.length === 1}
        onClick={() => handleRemoveExercise(exercise.id)}
      >
        remove
      </button>
    </div>
  )
}

export default NewExercise
