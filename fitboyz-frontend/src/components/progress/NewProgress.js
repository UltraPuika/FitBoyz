import React, { useState } from "react"
import ProgressService from "../../services/ProgressService"

const NewProgress = () => {
  const [progress, setProgress] = useState({})
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [unit, setUnit] = useState("")
  const [date, setDate] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    } else if (event.target.name === "amount") {
      setAmount(event.target.value)
    } else if (event.target.name === "unit") {
      setUnit(event.target.value)
    } else if (event.target.name === "date") {
      setDate(event.target.value)
    }
    setProgress({name, amount, unit, date})
  }

  const handleSubmit = (event) => {
    console.log(progress);
    ProgressService.createProgress(1, progress).then((res) => {})
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
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
        <label>
          Date:
          <input type="text" name="date" value={date} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewProgress
