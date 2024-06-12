import React from "react"
import { Routes, Route } from "react-router-dom"
import RegisterUser from "./pages/RegisterUser"
import LoginUser from "./pages/LoginUser"
import UserProfile from "./pages/UserProfile"
import Home from "./pages/Home"
import EditProfile from "./pages/EditProfile"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  )
}

export default App
