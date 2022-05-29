import React, { useState, useEffect } from "react"
import ProgressService from "../../services/ProgressService"

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
      <button onClick={() => (window.location.href = "/new-progress")}>
        Add progress
      </button>
      {progress.map(({ id, name, amount, reps, unit, date }) => {
        return (
          <div key={id}>
            <div>{name}</div>
            <div>{reps}</div>
            <div>{amount}</div>
            <div>{unit}</div>
            <div>{date}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Progress
