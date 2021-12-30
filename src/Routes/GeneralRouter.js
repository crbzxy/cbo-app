import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from "../Views/Start"
import Design from "../Views/Design"
import Error404 from "../Views/Error404"
function GeneralRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/design" element={<Design />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
