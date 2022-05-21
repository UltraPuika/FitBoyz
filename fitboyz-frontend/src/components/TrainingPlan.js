import React, { useState, useEffect } from "react"
import TrainingPlanService from "../services/TrainingPlanService"

const TrainingPlan = () => {
  const [trainingPlans, setTrainingPlan] = useState([])

  useEffect(() => {
    getTrainingPlans()
  }, [])

  const getTrainingPlans = () => {
    TrainingPlanService.getTrainingPlans().then((res) => {
      setTrainingPlan(res.data)
    })
  }

  return (
    <div>
      {trainingPlans.map(
        ({ id, title, planLength, date, sessions, numberOfSessions }) => {
          return (
            <div key={id}>
              <div>{title}</div>
              <div>{planLength}</div>
              <div>{date}</div>
              <div>{numberOfSessions}</div>
              <div>
                {sessions.map(({ id, title, intensity, sessionExercises }) => {
                  return (
                    <div key={id}>
                      <div>{title}</div>
                      <div>{intensity}</div>
                      <div>
                        {sessionExercises.map(({ id, name, sets, reps }) => {
                          return (
                            <div key={id}>
                              <div>{name}</div>
                              <div>{sets}</div>
                              <div>{reps}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default TrainingPlan
