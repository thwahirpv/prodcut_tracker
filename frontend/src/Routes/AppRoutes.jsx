import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Register from '../Pages/Register'
import Login from '../Pages/Login'

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path='register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
