import React, { useRef, useState, useEffect } from "react"
import AccessService from "../../services/AccessService"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value)
    } else if (event.target.name === "password") {
      setPassword(event.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    AccessService.getUser(username, password)
      .then((res) => {
        localStorage.setItem("token", res.data.id)
      })
      .then(() => (window.location.href = "/"))
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Login
