import React from "react"
import ProgressService from "../services/ProgressService"

const NewProgress = () => {
  const createProgress = (progress) => {
    ProgressService.createProgress(progress).then((res) => {
    })
  }

  return (
    <div>
      <button
        onClick={() => createProgress({
          id: 0,
          name: "ui",
          amount: 0,
          unit: "string",
          date: "2022-05-21",
        })}
      >
        progress
      </button>
    </div>
  )
}

export default NewProgress
