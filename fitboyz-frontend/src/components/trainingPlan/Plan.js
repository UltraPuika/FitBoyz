import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TrainingPlanService from "../../services/TrainingPlanService"
import Navbar from "../Navbar"

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
      getTrainingPlan()
    })
  }
  const setCurrentPlan = (id) => {
    TrainingPlanService.setCurrentTrainingPlan(id).then((res) => {
      getTrainingPlan()
    })
  }
  const deleteSession = (id) => {
    TrainingPlanService.deleteSession(id).then((res) => {
      getTrainingPlan()
    })
  }
  const deleteExercise = (id) => {
    console.log(id)
    TrainingPlanService.deleteExercise(id).then((res) => {
      getTrainingPlan()
    })
  }

  return (
    <div>
      <div>{trainingPlan.title}</div>
      <div>{trainingPlan.planLength}</div>
      <div>{trainingPlan.numberOfSessions}</div>
      <div>
        {trainingPlan.sessions.map(
          ({ id, sessionTitle, intensity, sessionExercises }) => {
            return (
              <div key={id}>
                <div>{sessionTitle}</div>
                <div>{intensity}</div>
                <div>
                  {sessionExercises.map(({ id, name, sets, reps }) => {
                    return (
                      <div key={id}>
                        <div>{name}</div>
                        <div>{sets}</div>
                        <div>{reps}</div>
                        <button
                          type="button"
                          onClick={() => deleteExercise(id)}
                        >
                          Delete exer
                        </button>
                      </div>
                    )
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => (window.location.href = "/new-workout/" + id)}
                >
                  Start workout
                </button>
                <button type="button" onClick={() => deleteSession(id)}>
                  Delete session
                </button>
              </div>
            )
          }
        )}
      </div>
      <button type="button" onClick={() => setCurrentPlan(trainingPlan.id)}>
        set current training plan
      </button>
      <button type="button" onClick={() => deletePlan(trainingPlan.id)}>
        Delete training plan
      </button>
    </div>
  )
}

export default Plan
