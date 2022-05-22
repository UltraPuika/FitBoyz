import axios from "axios"

const TRAINING_PLAN_API_BASE_URL = "http://localhost:8080/training-plan"

const USER_PARAM = "?userId="

class TrainingPlanService {
  getTrainingPlans(userId) {
    return axios.get(TRAINING_PLAN_API_BASE_URL + USER_PARAM + userId)
  }
  createTrainingPlan(userId, trainingPlan) {
    return axios.post(
      TRAINING_PLAN_API_BASE_URL + USER_PARAM + userId,
      trainingPlan
    )
  }
}

export default new TrainingPlanService()
