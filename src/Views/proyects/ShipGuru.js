import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/ShipGuru-userflow.png'



function ShipGuru() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - ShipGuru</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>ShipGuru</h1>
        <a href='https://shipguru.com.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>Ship Guru  es una plataforma de servicios de paquetería y envíos empresariales y soluciones de logística que optimizarán tus operaciones.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol  Diseñador:  UI-UX</Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 20 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: Actual
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark">Tecnologías:Wordpress, Scss, HTML 5</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>

          Este proyecto se heredó como servicio de Sección Amarilla para un rediseño en el look and feel de la marca buscando resolver las necesidades del cliente.


        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow ShipGuru.mx" /> */}


      </div>
      <iframe title="Ship Guru" width={1080} height={776} src="https://xd.adobe.com/embed/e895090c-da47-40df-8bc0-d02983d717f5-bdc6/" frameBorder={0} allowFullScreen />
    </div>
  )
}

export default ShipGuru

