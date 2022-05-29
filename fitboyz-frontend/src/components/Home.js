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
      <div>
        <a href="/training-plan">Training-plans</a>
      </div>
      <div>
        <a href="/workout">Previous workouts</a>
      </div>
      <div>
        <a href="/current-plan">Current plan</a>
      </div>
      <div>
        <a href="/progress">Progress</a>
      </div>
      <button onClick={handleClick}>logout</button>
      {/* <div>
        <a href="/new-training-plan">training-plan new</a>
        <a href="/new-progress">progress new</a>
      </div> */}
    </div>
  )
}

export default Home
