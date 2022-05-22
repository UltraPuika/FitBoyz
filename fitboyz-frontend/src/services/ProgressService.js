import axios from "axios"

const PROGRESS_API_BASE_URL = "http://localhost:8080/progress"

const USER_PARAM = "?userId="

class ProgressService {
  getProgress(userId) {
    return axios.get(PROGRESS_API_BASE_URL + USER_PARAM + userId)
  }
  createProgress(userId, progress) {
    return axios.post(PROGRESS_API_BASE_URL + USER_PARAM + userId, progress)
  }
}

export default new ProgressService()
