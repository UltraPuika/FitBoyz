import axios from "axios"

const PROGRESS_API_BASE_URL = "http://localhost:8080/progress"

const USER_PARAM = "?userId=1"

class ProgressService {
  getProgress() {
    return axios.get(PROGRESS_API_BASE_URL + USER_PARAM)
  }
  createProgress(progress){
return axios.post(PROGRESS_API_BASE_URL + USER_PARAM, progress)
  }

}

export default new ProgressService()
