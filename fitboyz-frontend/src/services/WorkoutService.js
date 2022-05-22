import axios from "axios"

const WORKOUT_API_BASE_URL = "http://localhost:8080/completed-session"

const USER_PARAM = "?userId="
const SESSION_PARAM = "?sessionId="

class WorkoutService {
  getWorkouts(userId) {
    return axios.get(WORKOUT_API_BASE_URL + USER_PARAM + userId)
  }
  // add session id
  createWorkout(workout) {
    return axios.post(WORKOUT_API_BASE_URL + SESSION_PARAM, workout)

  }
}

export default new WorkoutService()
