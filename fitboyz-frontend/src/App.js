import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import TrainingPlan from "./components/trainingPlan/TrainingPlan"
import NewTrainingPlan from "./components/trainingPlan/NewTrainingPlan"
import Workout from "./components/workout/Workout"
import NewWorkout from "./components/workout/NewWorkout"
import Progress from "./components/progress/Progress"
import NewProgress from "./components/progress/NewProgress"
import Login from "./components/access/Login"
import Registration from "./components/access/Registration"

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/training-plan" element={<TrainingPlan />} />
            <Route path="/training-plan/new" element={<NewTrainingPlan />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/workout/new" element={<NewWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/progress/new" element={<NewProgress />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
