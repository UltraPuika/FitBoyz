import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TrainingPlanService from "../../services/TrainingPlanService"
import Navbar from "../Navbar"
import { FaPlay, FaTrash, FaStar, FaRegStar } from "react-icons/fa"

const Plan = () => {
  const [trainingPlan, setTrainingPlan] = useState({
    id: "",
    title: "",
    planLength: "",
    sessions: [{ sessionTitle: "", intensity: "", sessionExercises: [] }],
    numberOfSessions: "",
  })

  const { planId } = useParams()

  useEffect(() => {
    getTrainingPlan(planId)
  }, [])

  const getTrainingPlan = (id) => {
    TrainingPlanService.getTrainingPlan(id).then((res) => {
      setTrainingPlan(res.data)
    })
  }
  const deletePlan = (id) => {
    TrainingPlanService.deletePlan(id).then((res) => {
      window.location.href = "/#/training-plan"
    })
  }
  const setCurrentPlan = (id) => {
    const userId = parseInt(sessionStorage.getItem("token"))
    TrainingPlanService.setCurrentTrainingPlan(id, userId).then((res) => {
      getTrainingPlan(planId)
    })
  }
  const deleteSession = (id) => {
    TrainingPlanService.deleteSession(id).then((res) => {
      getTrainingPlan(planId)
    })
  }
  const deleteExercise = (id) => {
    console.log(id)
    TrainingPlanService.deleteExercise(id).then((res) => {
      getTrainingPlan(planId)
    })
  }

  return (
    <div>
      <Navbar />
      <div className="plan">
        <div className="title">
          {trainingPlan.title}
          {trainingPlan.isCurrent ? (
            <FaStar
              className="icon"
              type="button"
              onClick={() => setCurrentPlan(trainingPlan.id)}
            />
          ) : (
            <FaRegStar
              className="icon"
              type="button"
              onClick={() => setCurrentPlan(trainingPlan.id)}
            />
          )}
        </div>
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
                      {trainingPlan.sessions.length > 1 && <FaTrash
                        className="icon"
                        onClick={() => deleteSession(id)}
                      />}
                      
                    </div>
                  </div>
                  <div>{intensity} intensity</div>
                  <div className="items exercises">
                    <h3>Exercises:</h3>
                    {sessionExercises.map(({ id, name, sets, reps }, index) => {
                      return (
                        <div className="item-container exercise-container" key={index}>
                          <div>
                            <div>
                              {index + 1}. {name}
                            </div>
                            <div>
                              {sets}x{reps}
                            </div>
                          </div>
{sessionExercises.length > 1 && <FaTrash
                            className="icon"
                            onClick={() => deleteExercise(id)}
                          />}
                          
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
    </div>
  )
}

export default Plan
