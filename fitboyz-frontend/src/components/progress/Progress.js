import React, { useState, useEffect } from "react"
import ProgressService from "../../services/ProgressService"
import { useGlobalContext } from "../../context"

const Progress = () => {
  const { userId } = useGlobalContext()
  const [progress, setProgress] = useState([
    { id: "", name: "", amount: "", unit: "", date: "" },
  ])

  useEffect(() => {
    getProgress()
  }, [])

  const getProgress = () => {
    ProgressService.getProgress(userId).then((res) => {
      setProgress(res.data)
    })
  }

  return (
    <div>
      {progress.map(({ id, name, amount, unit, date }) => {
        return (
          <div key={id}>
            <div>{name}</div>
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
