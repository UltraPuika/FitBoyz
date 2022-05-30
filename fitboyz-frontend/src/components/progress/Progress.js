import React, { useState, useEffect } from "react"
import ProgressService from "../../services/ProgressService"
import Navbar from "../Navbar"

const Progress = () => {
  const [progress, setProgress] = useState([
    { id: "", name: "", amount: "", unit: "", date: "" },
  ])

  useEffect(() => {
    getProgress()
  }, [])

  const getProgress = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    ProgressService.getProgress(id).then((res) => {
      setProgress(res.data)
    })
  }

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={() => (window.location.href = "/new-progress")}>
          Add progress
        </button>
        {progress.map(({ id, name, amount, reps, date }) => {
          return (
            <div key={id}>
              <div>{name}</div>
              <div>{reps}</div>
              <div>{amount}</div>
              <div>{date}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Progress
