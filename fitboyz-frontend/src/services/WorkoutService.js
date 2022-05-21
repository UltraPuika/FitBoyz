import axios from "axios"

const WORKOUT_API_BASE_URL = "http://localhost:8080/completed-session"

const USER_PARAM = "?userId=1"
const SESSION_PARAM = "?sessionId=114821"

class WorkoutService {
  getWorkouts() {
    return axios.get(WORKOUT_API_BASE_URL + USER_PARAM)
  }
  createWorkout(workout) {
    return axios.post(WORKOUT_API_BASE_URL + SESSION_PARAM, workout)
  }
}

export default new WorkoutService()
