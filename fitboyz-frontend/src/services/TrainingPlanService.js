import axios from "axios"

const TRAINING_PLAN_API_BASE_URL =
  "http://localhost:8080/training-plan"

  const USER_PARAM = "?userId=1"

class TrainingPlanService {
  getTrainingPlans() {
    return axios.get(TRAINING_PLAN_API_BASE_URL + USER_PARAM)
  }
  createTrainingPlan(trainingPlan) {
    return axios.post(TRAINING_PLAN_API_BASE_URL + USER_PARAM, trainingPlan)
  }
}

export default new TrainingPlanService()
