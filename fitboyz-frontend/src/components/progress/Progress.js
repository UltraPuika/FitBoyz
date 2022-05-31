import React, { useState, useEffect } from "react"
import ProgressService from "../../services/ProgressService"
import Navbar from "../Navbar"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
}





const Progress = () => {
  const [progress, setProgress] = useState([])
  const [data, setData] = useState()

  const [name, setName] = useState("")
  const [repsweight, setRepsweight] = useState("reps")
  const [amount, setAmount] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    } else if (event.target.name === "repsweight") {
      setRepsweight(event.target.value)
    } else if (event.target.name === "amount") {
      setAmount(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    let labels = []
    let amounts = []
    const id = parseInt(sessionStorage.getItem("token"))
    ProgressService.getProgress(name, id).then((res) => {
      console.log(res.data)
      res.data.forEach(({ date, amount }) => {
        labels = [...labels, date]
        amounts = [...amounts, amount]
      })
      setData({
        labels,
        datasets: [
          {
            label: name +" "+ amount + " " + repsweight,
            data: labels.map((i, x) => amounts.at(x)),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      }) 
    })
    event.preventDefault()
  }

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={() => (window.location.href = "/new-progress")}>
          Add progress
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Exercise:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            reps weight
            <select
              name="repsweight"
              onChange={handleChange}
              value={repsweight}
            >
              <option value="reps">reps</option>
              <option value="kg">weight</option>
            </select>
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save Progress</button>
        </form>

        {data !== undefined && <Line options={options} data={data} />}
      </div>
    </div>
  )
}

export default Progress
