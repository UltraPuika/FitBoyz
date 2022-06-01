import React, { useState } from "react"
import AccessService from "../../services/AccessService"
import Logo from "../../assets/images/Logo.svg"

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
        if (res.data.id !== undefined)
          sessionStorage.setItem("token", res.data.id)
      })
      .then(() => (window.location.href = "/"))
  }

  return (
    <div className="login-div">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <div className="link">
        Don't have an account? <a href="/#/registration">Sign up</a>
      </div>
    </div>
  )
}

export default Login
