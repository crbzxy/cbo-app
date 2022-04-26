import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/Ecoglobe-userflow.png'



function Ecoglobe() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - Ecoglobe</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Ecoglobe</h1>
        <a href='https://ecoglobe.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>Ecoglobe es una empresa familiar que ofrece servicios de instalación y mantenimiento de sistemas solares interconectados a la red federal de electricidad en tijuana.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol  Diseñador:  UI-UX, Desarrollador Web</Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 20 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: Actual
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark">Tecnologías:React, Node.js, Nodemailer</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>

          Ecoglobe es un proyecto que se retomó de una primera versión y en donde se busco crecer los canales de comunicación con nuevos clientes

        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow Ecoglobe.mx" /> */}


      </div>

    </div>
  )
}

export default Ecoglobe

