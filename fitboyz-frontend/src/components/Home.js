import React from "react"
import Logo from "../assets/images/Logo.svg"

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault()
    sessionStorage.removeItem("token")
    window.location.href = "/"
  }
  return (
    <div className="home">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div
        onClick={() => (window.location.href = "/#/training-plan")}
        className="item"
      >
        Training plans
      </div>
      <div onClick={() => (window.location.href = "/#/workout")} className="item">
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
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home
