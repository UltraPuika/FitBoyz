import axios from "axios"

const PROGRESS_API_BASE_URL = "/api/progress"

const USER_PARAM = "?userId="
const EXERCISE_PARAM = "&name="

class ProgressService {
  getProgress(name, userId) {
    return axios.get(
      PROGRESS_API_BASE_URL + USER_PARAM + userId + EXERCISE_PARAM + name
    )
  }
  getAllProgress(userId) {
    return axios.get(PROGRESS_API_BASE_URL + "/all" + USER_PARAM + userId)
  }
  createProgress(userId, progress) {
    return axios.post(PROGRESS_API_BASE_URL + USER_PARAM + userId, progress)
  }
}

export default new ProgressService()
