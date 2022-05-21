import React from 'react'
import WorkoutService from '../services/WorkoutService'

const NewWorkout = () => {
    const createWorkout = (workout) => {
      WorkoutService.createWorkout(workout).then((res) => {})
    }
  return (
    <div>
      <button
        onClick={() =>
          createWorkout({
            id: 0,
            date: "2022-05-21",
            completedExercises: [
              {
                id: 0,
                name: "es",
                completedSets: 0,
                completedReps: 0,
                amount: 0,
                unit: "es",
              },
            ],
          })
        }
      >
        workout
      </button>
    </div>
  )
}

export default NewWorkout