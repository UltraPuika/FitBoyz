import React from "react"
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom"
import Home from "./components/Home"
import TrainingPlan from "./components/trainingPlan/TrainingPlan"
import NewTrainingPlan from "./components/trainingPlan/NewTrainingPlan"
import Workout from "./components/workout/Workout"
import NewWorkout from "./components/workout/NewWorkout"
import Progress from "./components/progress/Progress"
import NewProgress from "./components/progress/NewProgress"
import Login from "./components/access/Login"
import Registration from "./components/access/Registration"
import Plan from "./components/trainingPlan/Plan"
import CurrentPlan from "./components/trainingPlan/CurrentPlan"

function App() {
  if (sessionStorage.getItem("token") === null) {
    return (
      <div>
        <HashRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    )
  }
  return (
    <div>
      <HashRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training-plan/:planId" element={<Plan />} />
            <Route path="/training-plan" element={<TrainingPlan />} />
            <Route path="/current-plan" element={<CurrentPlan />} />
            <Route path="/new-training-plan" element={<NewTrainingPlan />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/new-workout/:sessionId" element={<NewWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/new-progress" element={<NewProgress />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
