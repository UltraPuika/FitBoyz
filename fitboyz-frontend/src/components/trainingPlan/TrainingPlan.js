import React, { useState, useEffect } from "react"
import TrainingPlanService from "../../services/TrainingPlanService"

const TrainingPlan = () => {
  const [trainingPlans, setTrainingPlan] = useState([])

  useEffect(() => {
    getTrainingPlans()
  }, [])

  const getTrainingPlans = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    TrainingPlanService.getTrainingPlans(id).then((res) => {
      setTrainingPlan(res.data)
    })
  }
  const deletePlan = (id) => {
    TrainingPlanService.deletePlan(id).then((res) => {
      getTrainingPlans()
    })
  }
  const setCurrentPlan = (id) => {
    TrainingPlanService.setCurrentTrainingPlan(id).then((res) => {
      getTrainingPlans()
    })
  }
  const deleteSession = (id) => {
    TrainingPlanService.deleteSession(id).then((res) => {
      getTrainingPlans()
    })
  }

  return (
    <div>
      <button onClick={() => (window.location.href = "/new-training-plan")}>
        New training plan
      </button>
      {trainingPlans.map(
        ({ id, title, planLength, sessions, numberOfSessions }) => {
          return (
            <div key={id}>
              <div>{title}</div>
              <div>{planLength}</div>
              <div>{numberOfSessions}</div>
              <div>
                {sessions.map(({ id, sessionTitle, intensity }) => {
                  return (
                    <div key={id}>
                      <div>{sessionTitle}</div>
                      <div>{intensity}</div>
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href = "/new-workout/" + id)
                        }
                      >
                        Start workout
                      </button>
                      <button type="button" onClick={() => deleteSession(id)}>
                        Delete session
                      </button>
                    </div>
                  )
                })}
              </div>
              <button
                type="button"
                onClick={() => (window.location.href = "/training-plan/" + id)}
              >
                view
              </button>

              <button type="button" onClick={() => setCurrentPlan(id)}>
                set current training plan
              </button>
              <button type="button" onClick={() => deletePlan(id)}>
                Delete training plan
              </button>
            </div>
          )
        }
      )}
    </div>
  )
}

export default TrainingPlan
