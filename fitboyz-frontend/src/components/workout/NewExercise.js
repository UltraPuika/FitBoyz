import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaPlus, FaMinus } from "react-icons/fa"

const NewExercise = ({
  exercise,
  handleChangeCE,
  handleRemoveExercise,
  setCompletedExercises,
  setWorkout,
  completedExercises,
  workout,
}) => {
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
    <div className="exercise" key={exercise.id}>
      <label>
        Exercise:
        <input
          className="add-workout"
          type="text"
          name="name"
          value={exercise.name}
          onChange={(event) => handleChangeCE(exercise.id, event)}
        />
        {completedExercises.length > 1 && (
          <FaMinus
            className="icon"
            onClick={() => handleRemoveExercise(exercise.id)}
          />
        )}
      </label>
      <table>
        <thead>
          <tr className="single-set">
            <th>SET</th>
            <th>REPS</th>
            <th>WEIGHT (KG)</th>
          </tr>
        </thead>
        <tbody>
          {sets.map((set, index) => {
            return (
              <tr key={index} className="single-set">
                <td className="set-nu">{index + 1}</td>
                <td>
                  <label>
                    <input
                      type="number"
                      name="completedReps"
                      value={set.completedReps}
                      onChange={(event) =>
                        handleChangeS(exercise.id, set.id, event)
                      }
                    />
                  </label>
                </td>
                <td>
                  <label>
                    <input
                      type="number"
                      name="amount"
                      value={set.amount}
                      onChange={(event) =>
                        handleChangeS(exercise.id, set.id, event)
                      }
                    />
                  </label>
                </td>
                {sets.length > 1 && (
                  <td>
                    <FaMinus
                      className="icon"
                      disabled={sets.length === 1}
                      onClick={() => handleRemoveSet(set.id)}
                    />
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <FaPlus className="icon-1" onClick={handleAddSet} />
      </div>
    </div>
  )
}

export default NewExercise
