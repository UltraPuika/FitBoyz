import axios from "axios"

const WORKOUT_API_BASE_URL = "/api/completed-session"

const USER_PARAM = "?userId="
const SESSION_PARAM = "?sessionId="

class WorkoutService {
  getWorkouts(userId) {
    return axios.get(WORKOUT_API_BASE_URL + USER_PARAM + userId)
  }

  createWorkout(sessionId, workout) {
    return axios.post(WORKOUT_API_BASE_URL + SESSION_PARAM + sessionId, workout)
  }
  deleteWorkout(id) {
    return axios.delete(WORKOUT_API_BASE_URL + "/" + id)
  }
}

export default new WorkoutService()
