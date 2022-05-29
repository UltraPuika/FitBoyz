import React, { useState, useEffect } from "react";
import TrainingPlanService from "../../services/TrainingPlanService";

const TrainingPlan = () => {
  const [trainingPlans, setTrainingPlan] = useState([]);

  useEffect(() => {
    getTrainingPlans();
  }, []);

  const getTrainingPlans = () => {
    const id = parseInt(sessionStorage.getItem("token"));
    TrainingPlanService.getTrainingPlans(id).then((res) => {
      setTrainingPlan(res.data);
    });
  };
  const deletePlan = (id) => {
    TrainingPlanService.deletePlan(id).then((res) => {
      getTrainingPlans();
    });
  };
  const setCurrentPlan = (id) => {
    TrainingPlanService.setCurrentTrainingPlan(id).then((res) => {
      getTrainingPlans();
    });
  };
  const deleteSession = (id) => {
    TrainingPlanService.deleteSession(id).then((res) => {
      getTrainingPlans();
    });
  };

  return (
    <div className="new-training-plan">
      <button
        style={{ position:"fixed", left: "20px", top: "20px"}}
        onClick={() => (window.location.href = "/new-training-plan")}
      >
        New training plan
      </button>
      {trainingPlans.map(
        ({ id, title, planLength, sessions, numberOfSessions }) => {
          return (
            <div className="box" key={id}>
              <h1 id="1">{title}</h1>

              <div className="Align-texts">
                <p>Plan Length</p> <h2>{planLength}</h2>
              </div>
              <div className="Align-texts">
                <p>Session Count</p> <h2>{numberOfSessions}</h2>
              </div>
              <div>
                {sessions.map(({ id, sessionTitle, intensity }) => {
                  return (
                    <div className="Session-container" key={id}>
                      <div className="Align-texts">
                        <p>Title</p> <h3>{sessionTitle}</h3>
                      </div>

                      <div className="Align-texts">
                        <p>Intensity</p> <h3>{intensity}</h3>
                      </div>
                      <div className="session-button-group">
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
                      
                    </div>
                  );
                })}
              </div>
              <div className="button-group">
                <div className="split-line"></div>
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = "/training-plan/" + id)
                  }
                >
                  view
                </button>

                <button type="button" onClick={() => setCurrentPlan(id)}>
                  set current training plan
                </button>
                <button type="button" onClick={() => deletePlan(id)}>
                  Delete Plan
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default TrainingPlan;
