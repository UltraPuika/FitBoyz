import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import TrainingPlan from "./components/TrainingPlan"
import NewTrainingPlan from "./components/NewTrainingPlan"
import Workout from "./components/Workout"
import NewWorkout from "./components/NewWorkout"
import Progress from "./components/Progress"
import NewProgress from "./components/NewProgress"

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
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
