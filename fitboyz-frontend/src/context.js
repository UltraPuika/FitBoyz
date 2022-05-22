import React, { useState, useContext } from "react"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState("")

  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
