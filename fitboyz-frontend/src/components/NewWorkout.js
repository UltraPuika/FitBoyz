import React, { useState } from "react"
import WorkoutService from "../services/WorkoutService"

const NewWorkout = () => {
  const [workout, setWorkout] = useState({})
  const [date, setDate] = useState("")
  const [completedExercises, setCompletedExercises] = useState([{}])
  const [name, setName] = useState("")
  const [completedSets, setCompletedSets] = useState("")
  const [completedReps, setCompletedReps] = useState("")
  const [amount, setAmount] = useState("")
  const [unit, setUnit] = useState("")
  //todo fix array posting
  const handleChange = (event) => {
    if (event.target.name === "date") {
      setDate(event.target.value)
    } else {
      if (event.target.name === "name") {
        setName(event.target.value)
      } else if (event.target.name === "completedSets") {
        setCompletedSets(event.target.value)
      } else if (event.target.name === "completedReps") {
        setCompletedReps(event.target.value)
      } else if (event.target.name === "amount") {
        setAmount(event.target.value)
      } else if (event.target.name === "unit") {
        setUnit(event.target.value)
      }
      setCompletedExercises([
        { name, completedSets, completedReps, amount, unit },
      ])
    }
    setWorkout({ date, completedExercises })
  }

  const handleSubmit = (event) => {
    WorkoutService.createWorkout(workout).then((res) => {})
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" name="date" value={date} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Completed Sets:
          <input
            type="text"
            name="completedSets"
            value={completedSets}
            onChange={handleChange}
          />
        </label>
        <label>
          Completed Reps:
          <input
            type="text"
            name="completedReps"
            value={completedReps}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Unit:
          <input type="text" name="unit" value={unit} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewWorkout
