import React from "react"

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    window.location.href = "/"
  }
  return (
    <div>
      <div>
        <a href="/training-plan">training-plan</a>
        <a href="/workout">workout</a>
        <a href="/progress">progress</a>
      </div>
      <div>
        <a href="/training-plan/new">training-plan new</a>
        <a href="/workout/new">workout new</a>
        <a href="/progress/new">progress new</a>
      </div>
      <button onClick={handleClick}>logout</button>
    </div>
  )
}

export default Home
