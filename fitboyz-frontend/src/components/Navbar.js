import React from "react"
import Logo from "../assets/images/F.svg"
const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    sessionStorage.removeItem("token")
    window.location.href = "/"
  }
  return (
    <div className="navbar">
      <div onClick={() => (window.location.href = "/")} className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="links">
        <div
          onClick={() => (window.location.href = "/#/training-plan")}
          className="item"
        >
          Training plans
        </div>
        <div
          onClick={() => (window.location.href = "/#/workout")}
          className="item"
        >
          Previous workouts
        </div>
        <div
          onClick={() => (window.location.href = "/#/current-plan")}
          className="item"
        >
          Current plan
        </div>
        <div
          onClick={() => (window.location.href = "/#/progress")}
          className="item"
        >
          Progress
        </div>
      </div>

      <div>
        <div onClick={handleClick} className="logout">
          Logout
        </div>
      </div>
    </div>
  )
}

export default Navbar
