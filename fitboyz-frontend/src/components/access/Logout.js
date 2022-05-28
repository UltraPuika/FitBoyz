import React from "react"

const Logout = () => {
  const handleClick = (e) => {
    e.preventDefault()
    sessionStorage.removeItem("token").then(() => (window.location.href = "/"))
  }

  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Logout
