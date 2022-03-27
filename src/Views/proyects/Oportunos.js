import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'
import Manifiesto from '../Manifiesto'

function Oportunos() {
  return (
    <div>
      <Helmet>
        <title>CBO - Oportunos</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      <section className="App-header">
        <h1>Oportunos</h1>
      </section>
      <Manifiesto />
    </div>
  )
}

export default Oportunos

