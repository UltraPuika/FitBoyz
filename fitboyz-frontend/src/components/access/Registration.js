import React, { useState } from "react"
import AccessService from "../../services/AccessService"
import Logo from "../../assets/images/Logo.svg"

const Registration = () => {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value)
    } else if (event.target.name === "password") {
      setPassword(event.target.value)
    } else if (event.target.name === "confirm") {
      setConfirmPass(event.target.value)
    }
    setUser({ username, password })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPass) {
      AccessService.createUser(user).then(() => (window.location.href = "/"))
    }
  }

  return (
    <div className="register-div">
      <img src={Logo} alt="Logo" />
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
        <label>
          Confirm password:
          <input
            type="password"
            name="confirm"
            value={confirmPass}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign up</button>
        <div>
          Already have an account? <a href="/">Log in</a>
        </div>
      </form>
    </div>
  )
}

export default Registration
