import React, { useState, useEffect } from "react"
import TrainingPlanService from "../../services/TrainingPlanService"

const CurrentPlan = () => {
  const [trainingPlan, setTrainingPlan] = useState({
    id: "",
    title: "",
    planLength: "",
    sessions: [{ sessionTitle: "", intensity: "", sessionExercises: [] }],
    numberOfSessions: "",
  })

  useEffect(() => {
    getCurrentTrainingPlan()
  }, [])

  const getCurrentTrainingPlan = () => {
    TrainingPlanService.getCurrentTrainingPlan().then((res) => {
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
      <button type="button" onClick={() => deletePlan(trainingPlan.id)}>
        Delete training plan
      </button>
    </div>
  )
}

export default CurrentPlan
