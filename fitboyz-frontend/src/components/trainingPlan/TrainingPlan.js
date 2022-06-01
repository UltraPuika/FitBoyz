import React, { useState, useEffect } from "react"
import TrainingPlanService from "../../services/TrainingPlanService"
import Navbar from "../Navbar"
import { FaPlay, FaTrash, FaRegEye, FaStar, FaRegStar } from "react-icons/fa"

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
    const userId = parseInt(sessionStorage.getItem("token"))
    TrainingPlanService.setCurrentTrainingPlan(id, userId).then((res) => {
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
      <Navbar />
      <div
        onClick={() => (window.location.href = "/new-training-plan")}
        className="add-plan"
      >
        ADD NEW TRAINING PLAN
      </div>
      {trainingPlans ?
      <div className="main-container training-plan">
        {trainingPlans.map(
          ({
            id,
            title,
            planLength,
            sessions,
            numberOfSessions,
            isCurrent,
          }) => {
            return (
              <div className="box" key={id}>
                <div className="header">
                  <h1>{title}</h1>
                  <div className="btns">
                    {isCurrent ? (
                      <FaStar
                      className="icon"
                      type="button"
                      onClick={() => setCurrentPlan(id)}
                      />
                      ) : (
                      <FaRegStar
                      className="icon"
                      type="button"
                      onClick={() => setCurrentPlan(id)}
                      />
                      )}
                    <FaRegEye
                      className="icon"
                      onClick={() =>
                        (window.location.href = "/training-plan/" + id)
                      }
                      />
                  </div>
                </div>
                <p>
                  Plan Length: <strong>{planLength}</strong> weeks
                </p>
                <p>
                  Sessions per week: <strong>{numberOfSessions}</strong>{" "}
                </p>
                <div className="items sessions">
                  <h3>Sessions:</h3>
                  {sessions.map(({ id, sessionTitle, intensity }) => {
                    return (
                      <div
                      className="item-container session-container"
                      key={id}
                      >
                        <div className="session-text">
                          <p>
                            <strong>{sessionTitle}</strong> ({intensity}{" "}
                            intensity)
                          </p>
                        </div>
                        <div className="session-button-group">
                          <FaPlay
                            className="icon"
                            onClick={() =>
                              (window.location.href = "/new-workout/" + id)
                            }
                            />
                            {sessions.length > 1 && <FaTrash
                            className="icon"
                            onClick={() => deleteSession(id)}
                            />}
                          
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="button-group">
                  <button type="button" onClick={() => deletePlan(id)}>
                    Delete Plan
                  </button>
                </div>
              </div>
            )
          }
          )}
      </div>
  :  <h1 className="nothing">There is no training plans!</h1>}
    </div>
    )
  }
  
  export default TrainingPlan
