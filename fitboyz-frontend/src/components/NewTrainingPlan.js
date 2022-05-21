import React from 'react'
import TrainingPlanService from '../services/TrainingPlanService'

const NewTrainingPlan = () => {
   const createTrainingPlan = (trainingPlan) => {
     TrainingPlanService.createTrainingPlan(trainingPlan).then((res) => {})
   }
  return (
    <div>
      <button
        onClick={() =>
          createTrainingPlan({
            id: 0,
            title: "es",
            planLength: 0,
            date: "2022-05-21",
            sessions: [
              {
                id: 0,
                title: "es",
                intensity: "es",
                sessionExercises: [
                  {
                    id: 0,
                    name: "es",
                    sets: 0,
                    reps: 0,
                  },
                ],
              },
            ],
            numberOfSessions: 0,
          })
        }
      >
        training plan
      </button>
    </div>
  )
}

export default NewTrainingPlan