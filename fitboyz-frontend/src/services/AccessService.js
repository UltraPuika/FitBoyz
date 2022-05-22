import axios from "axios"

const USER_API_BASE_URL = "http://localhost:8080/user"

const EMAIL_PARAM = "?email="
const PASS = "&password="

class AccessService {
  getUser(email, pass) {
    return axios.get(USER_API_BASE_URL + EMAIL_PARAM + email + PASS + pass)
  }
  createUser(user) {
    return axios.post(USER_API_BASE_URL, user)
  }
}

export default new AccessService()
