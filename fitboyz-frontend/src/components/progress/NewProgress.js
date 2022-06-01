import React, { useState } from "react"
import ProgressService from "../../services/ProgressService"
import Navbar from "../Navbar"

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const monthString = month < 10 ? "0" + month : month
const dayString = day < 10 ? "0" + day : day
const currentDate = year + "-" + monthString + "-" + dayString

const NewProgress = () => {
  const [name, setName] = useState("")
  const [reps, setReps] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState(currentDate)

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    } else if (event.target.name === "reps") {
      setReps(event.target.value)
    } else if (event.target.name === "amount") {
      setAmount(event.target.value)
    } else if (event.target.name === "date") {
      setDate(event.target.value)
    }
  }

  const checkIfEmpty = ({ name, reps, amount, date }) => {
    let test = false;
    if (!date || !name || !reps || !amount) {
      test = true;
    }
    return test;
  };

  const handleSubmit = (event) => {
    event.preventDefault()
if(checkIfEmpty({ name, reps, amount, date })){
alert("Please fill all fields!")
}else{

  const id = parseInt(sessionStorage.getItem("token"))
  ProgressService.createProgress(id, { name, reps, amount, date }).then(
    (res) => {}
    )
  }
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
