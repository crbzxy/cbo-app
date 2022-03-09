import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from "../Views/Start"
import Design from "../Views/Design"
import Error404 from "../Views/Error404"
import { Login } from '../Views/Login'
import { Register } from '../Views/Register'
import { AuthProvider } from '../context/AuthContext'
import Cv from '../Views/Cv'
import { ProtectedRoute } from '../Components/ProtectedRoutes'
import Arte from '../Views/Art'
function GeneralRouter() {
  return (
    <>

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/design" element={<Design />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/arte' element={<Arte />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/cv' element={<ProtectedRoute>

              <Cv />
            </ProtectedRoute>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
