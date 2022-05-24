import axios from "axios"

const USER_API_BASE_URL = "http://localhost:8080/user"

const USERNAME = "?username="
const PASSWORD = "&password="

class AccessService {
  getUser(username, password) {
    return axios.get(
      USER_API_BASE_URL + USERNAME + username + PASSWORD + password
    )
  }
  createUser(user) {
    return axios.post(USER_API_BASE_URL, user)
  }
}

export default new AccessService()
