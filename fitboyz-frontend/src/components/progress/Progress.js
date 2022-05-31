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
  const [exercises, setExercises] = useState([])
  const [data, setData] = useState()

  const [name, setName] = useState("")
  const [repsweight, setRepsweight] = useState("reps")
  const [count, setCount] = useState("")

  const handleChange = (event) => {
    if (event.target.list.id === "exercises") {
      setName(event.target.value)
    } else if (event.target.name === "repsweight") {
      setRepsweight(event.target.value)
    } else if (event.target.name === "amount") {
      setCount(event.target.value)
    }
  }

  useEffect(() => {
    getExercises()
  }, [])

  const getExercises = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    ProgressService.getAllProgress(id).then((res) => {
      setExercises(res.data)
    })
  }

  const handleSubmit = (event) => {
    let labels = []
    let amounts = []
    const id = parseInt(sessionStorage.getItem("token"))
    ProgressService.getProgress(name, id).then((res) => {
      res.data.forEach(({ date, amount, reps }) => {
        if (repsweight === "reps") {
          if (parseInt(count) === reps) {
            if (date === labels[labels.length - 1]) {
              if (amount > amounts[amounts.length - 1]) {
                amounts.splice(amounts.length - 1, 1, amount)
              }
            } else {
              labels = [...labels, date]
              amounts = [...amounts, amount]
            }
          }
        } else {
          if (parseInt(count) === amount) {
            if (date === labels[labels.length - 1]) {
              if (reps > amounts[amounts.length - 1]) {
                amounts.splice(amounts.length - 1, 1, reps)
              }
            } else {
              labels = [...labels, date]
              amounts = [...amounts, reps]
            }
          }
        }
      })
      setData({
        labels,
        datasets: [
          {
            label: name + " with " + count + " " + repsweight,
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
              list="exercises"
              onChange={handleChange}
              value={name}
            />
            <datalist id="exercises">
              {exercises.map((exercise) => {
                return <option value={exercise}>{exercise}</option>
              })}
            </datalist>
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
              value={count}
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
