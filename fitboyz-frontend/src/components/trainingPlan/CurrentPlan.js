import React, { useState, useEffect } from "react"
import TrainingPlanService from "../../services/TrainingPlanService"
import Navbar from "../Navbar"
import { FaPlay, FaTrash } from "react-icons/fa"

const CurrentPlan = () => {
  const [trainingPlan, setTrainingPlan] = useState("")

  useEffect(() => {
    getCurrentTrainingPlan()
  }, [])

  const getCurrentTrainingPlan = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    TrainingPlanService.getCurrentTrainingPlan(id).then((res) => {
      setTrainingPlan(res.data)
    })
  }
  const deletePlan = (id) => {
    TrainingPlanService.deletePlan(id).then((res) => {
      getCurrentTrainingPlan()
    })
  }
  const deleteSession = (id) => {
    TrainingPlanService.deleteSession(id).then((res) => {
      getCurrentTrainingPlan()
    })
  }
  const deleteExercise = (id) => {
    TrainingPlanService.deleteExercise(id).then((res) => {
      getCurrentTrainingPlan()
    })
  }

  return (
    <div>
      <Navbar />
        {trainingPlan ? 
      <div className="plan">
        <div className="title">{trainingPlan.title}</div>
        <div className="main">
          <div className="main-info">
            Plan Length: <strong>{trainingPlan.planLength}</strong> weeks
          </div>
          <div className="main-info">
            Sessions per week: <strong>{trainingPlan.numberOfSessions}</strong>
          </div>
        </div>

<div className="main-container sessions">
          {trainingPlan.sessions.map(
            ({ id, sessionTitle, intensity, sessionExercises }, index) => {
              return (
                <div className="box" key={index}>
                  <div className="header">
                    <h1>{sessionTitle}</h1>
                    <div className="btns">
                      <FaPlay
                        className="icon"
                        onClick={() =>
                          (window.location.href = "/#/new-workout/" + id)
                        }
                        />
                      <FaTrash
                        className="icon"
                        onClick={() => deleteSession(id)}
                      />
                    </div>
                  </div>
                  <div>{intensity} intensity</div>
                  <div className="items exercises">
                    <h3>Exercises:</h3>
                    {sessionExercises.map(({ id, name, sets, reps }, index) => {
                      return (
                        <div
                        className="item-container exercise-container"
                        key={index}
                        >
                          <div>
                            <div>
                              {index + 1}. {name}
                            </div>
                            <div>
                              {sets}x{reps}
                            </div>
                          </div>

                          <FaTrash
                            className="icon"
                            onClick={() => deleteExercise(id)}
                            />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }
          )}
        </div>
        <button type="button" onClick={() => deletePlan(trainingPlan.id)}>
          Delete Training Plan
        </button>
      </div>
    : <h1 className="nothing">Current training plan is not set!</h1>}
      </div>
      )
}

export default CurrentPlan
