import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'
function TiendaEnlinea() {
  const navigate = useNavigate();
  return (
    <div>

      <Helmet>
        <title>CBO - Oportunos</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Tienda en línea</h1>
      </section>

      <p>https://tiendaenlinea.adn.com.mx/</p>
    </div>
  )
}

export default TiendaEnlinea