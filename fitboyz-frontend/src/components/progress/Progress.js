import React, { useState, useEffect } from "react"
import ProgressService from "../../services/ProgressService"
import Navbar from "../Navbar"
import { FaSearch } from "react-icons/fa"

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
    if (event.target.name === "name") {
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
    <div className="progress">
      <Navbar />
      <div className="content">
        <button
          className="add-progress"
          onClick={() => (window.location.href = "/new-progress")}
        >
          Add Progress
        </button>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <h2>Select Data</h2>
            <div className="form">
              <label>
                Exercise:
                <select
                  className="input-progress"
                  name="name"
                  onChange={handleChange}
                  value={name}
                >
                  <option value="" selected disabled hidden></option>
                  {exercises.map((exercise) => {
                    return <option value={exercise}>{exercise}</option>
                  })}
                </select>
              </label>
              <label>
                View progress for:
                <select
                  className="input-progress"
                  name="repsweight"
                  onChange={handleChange}
                  value={repsweight}
                >
                  <option value="KG">Reps</option>
                  <option value="reps">Weight</option>
                </select>
              </label>
              <label>
                {repsweight === "KG" ? "With Weight (KG)" : "With Reps:"}
                <input
                  className="input-progress"
                  type="number"
                  name="amount"
                  value={count}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="data">
          {data !== undefined && <Line options={options} data={data} />}
        </div>
      </div>
    </div>
  )
}

export default Progress
