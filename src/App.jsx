import React from "react"
import { Routes, Route } from "react-router-dom"
import RegisterUser from "./components/RegisterUser"
import LoginUser from "./components/LoginUser"
import UserProfile from "./components/UserProfile"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default App
