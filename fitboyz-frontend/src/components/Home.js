import React from "react"

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault()
    sessionStorage.removeItem("token")
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
        <a href="/new-training-plan">training-plan new</a>
        <a href="/current-plan">current</a>
        <a href="/new-progress">progress new</a>
      </div>
      <button onClick={handleClick}>logout</button>
    </div>
  )
}

export default Home
