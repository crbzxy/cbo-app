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
import Oportunos from '../Views/proyects/Oportunos'
import GaleriaUnion from '../Views/proyects/GaleriaUnion'
import Lapi from '../Views/proyects/Lapi'
import Ecoglobe from '../Views/proyects/Ecoglobe'
import ShipGuru from '../Views/proyects/ShipGuru'
import Adsu from '../Views/proyects/Adsu'
import Canalla from '../Views/proyects/Canalla'
import GoPharma from '../Views/proyects/GoPharma'
import ScrollToTop from '../Components/ScrollToTop'
import Contacto from '../Views/Contacto'

function GeneralRouter() {
  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/design" element={<Design />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/arte' element={<Arte />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/cv' element={
              <ProtectedRoute>
                <Cv />
              </ProtectedRoute>}
            />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/oportunos' element={<Oportunos />} />
            <Route path='/galeria-union' element={<GaleriaUnion />} />
            <Route path='/lapi' element={<Lapi />} />
            <Route path='/ecoglobe' element={<Ecoglobe />} />
            <Route path='/shipguru' element={<ShipGuru />} />
            <Route path='/adsu' element={<Adsu />} />
            <Route path='/canalla-neza' element={<Canalla />} />
            <Route path='/go-pharma' element={<GoPharma />} />


          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
