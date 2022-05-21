import React, { useState } from "react"
import TrainingPlanService from "../services/TrainingPlanService"
//todo fix array posting
const NewTrainingPlan = () => {
  const [trainingPlan, setTrainingPlan] = useState({})

  const [title, setTitle] = useState("")
  const [planLength, setPlanLength] = useState("")
  const [date, setDate] = useState("")
  const [numberOfSessions, setNumberOfSessions] = useState("")

  const [sessions, setSessions] = useState([{}])
  const [sessionTitle, setSessionTitle] = useState("")
  const [intensity, setIntensity] = useState("")

  const [sessionExercises, setSessionExercises] = useState([{}])
  const [name, setname] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value)
    } else if (event.target.name === "planLength") {
      setPlanLength(event.target.value)
    } else if (event.target.name === "date") {
      setDate(event.target.value)
    } else if (event.target.name === "numberOfSessions") {
      setNumberOfSessions(event.target.value)
    } else {
      if (event.target.name === "sessionTitle") {
        setSessionTitle(event.target.value)
      } else if (event.target.name === "intensity") {
        setIntensity(event.target.value)
      } else {
        if (event.target.name === "name") {
          setname(event.target.value)
        } else if (event.target.name === "sets") {
          setSets(event.target.value)
        } else if (event.target.name === "reps") {
          setReps(event.target.value)
        }
        setSessionExercises([{ name, sets, reps }])
      }
      setSessions([{ sessionTitle, intensity, sessionExercises }])
    }
    setTrainingPlan({
      title,
      planLength,
      date,
      sessions,
      numberOfSessions,
    })
  }

  const handleSubmit = (event) => {
    console.log(trainingPlan)
    TrainingPlanService.createTrainingPlan(trainingPlan).then((res) => {})
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Plan Length:
          <input
            type="text"
            name="planLength"
            value={planLength}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={date} onChange={handleChange} />
        </label>
        <label>
          Session Title:
          <input
            type="text"
            name="sessionTitle"
            value={sessionTitle}
            onChange={handleChange}
          />
        </label>
        <label>
          Intensity:
          <input
            type="text"
            name="intensity"
            value={intensity}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Sets:
          <input type="text" name="sets" value={sets} onChange={handleChange} />
        </label>
        <label>
          Reps:
          <input type="text" name="reps" value={reps} onChange={handleChange} />
        </label>
        <label>
          Number Of Sessions:
          <input
            type="text"
            name="numberOfSessions"
            value={numberOfSessions}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewTrainingPlan
