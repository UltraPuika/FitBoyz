import axios from "axios"

const TRAINING_PLAN_API_BASE_URL = "http://localhost:8080/training-plan"

const USER_PARAM = "?userId="

const SESSION = "/session"
const EXERCISE = "/exercise"

class TrainingPlanService {
  getTrainingPlans(userId) {
    return axios.get(TRAINING_PLAN_API_BASE_URL + USER_PARAM + userId)
  }
  getTrainingPlan(id) {
    return axios.get(TRAINING_PLAN_API_BASE_URL + "/" + id)
  }
  getCurrentTrainingPlan(userId) {
    return axios.get(TRAINING_PLAN_API_BASE_URL + "/current" + USER_PARAM + userId)
  }
  setCurrentTrainingPlan(id, userId) {
    return axios.put(TRAINING_PLAN_API_BASE_URL + "/current/" + id + USER_PARAM + userId)
  }
  getSession(sessionId) {
    return axios.get(TRAINING_PLAN_API_BASE_URL + SESSION + "/" + sessionId)
  }
  createTrainingPlan(userId, trainingPlan) {
    return axios.post(
      TRAINING_PLAN_API_BASE_URL + USER_PARAM + userId,
      trainingPlan
    )
  }
  deletePlan(id) {
    return axios.delete(TRAINING_PLAN_API_BASE_URL + "/" + id)
  }
  deleteSession(id) {
    return axios.delete(TRAINING_PLAN_API_BASE_URL + SESSION + "/" + id)
  }
  deleteExercise(id) {
    return axios.delete(TRAINING_PLAN_API_BASE_URL + EXERCISE + "/" + id)
  }
}

export default new TrainingPlanService()
