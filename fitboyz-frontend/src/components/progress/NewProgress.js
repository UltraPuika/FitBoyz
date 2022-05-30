import React, { useState } from "react"
import ProgressService from "../../services/ProgressService"
import Navbar from "../Navbar"

const NewProgress = () => {
  const [name, setName] = useState("")
  const [reps, setReps] = useState("")
  const [amount, setAmount] = useState("")
  const [unit, setUnit] = useState("")
  const [date, setDate] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    } else if (event.target.name === "reps") {
      setReps(event.target.value)
    } else if (event.target.name === "amount") {
      setAmount(event.target.value)
    } else if (event.target.name === "unit") {
      setUnit(event.target.value)
    } else if (event.target.name === "date") {
      setDate(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    const id = parseInt(sessionStorage.getItem("token"))
    ProgressService.createProgress(id, { name, reps, amount, unit, date }).then(
      (res) => {}
    )
    event.preventDefault()
  }

  return (
    <div>
      <Navbar />
      <div className="new-progress">
        <h1 className="title">New Progress</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Exercise:
            <input
              className="progress-input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              className="progress-input-num da"
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </label>
          <label>
            Reps:
            <input
              className="progress-input-num re"
              type="number"
              name="reps"
              value={reps}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight:
            <input
              className="progress-input-num am"
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save Progress</button>
        </form>
      </div>
    </div>
  )
}

export default NewProgress
