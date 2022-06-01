import React, { useState, useEffect } from "react"
import WorkoutService from "../../services/WorkoutService"
import Navbar from "../Navbar"

const Workout = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    getWorkouts()
  }, [])

  const getWorkouts = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    WorkoutService.getWorkouts(id).then((res) => {
      console.log(res.data);
      setWorkouts(res.data)
    })
  }
  const deleteWorkout = (id) => {
    WorkoutService.deleteWorkout(id).then((res) => {
      getWorkouts()
    })
  }

  return (
    <div>
      <Navbar />
      {workouts ? 
      <div className="workout main-container">
        {workouts.map(({ id, date, completedExercises }) => {
          return (
            <div className="box" key={id}>
              <h1 className="date">Workout date: {date}</h1>
              <div className="items">
                {completedExercises.map(({ id, name, sets }) => {
                  return (
                    <div key={id}>
                      <div className="exer">Exercise: {name}</div>
                      <div>
                        {sets.map(({ id, completedReps, amount }, index) => {
                          return (
                            <div className="item-container" key={id}>
                              <div className="items">
                                {index+1}. Set -  {completedReps} x {amount}kg
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              <button type="button" onClick={() => deleteWorkout(id)}>
                Delete workout
              </button>
            </div>
          )
        })}
      </div>
  :  <h1 className="nothing">There is no workouts recorded!</h1>}
    </div>
    )
  }
  
  export default Workout
  