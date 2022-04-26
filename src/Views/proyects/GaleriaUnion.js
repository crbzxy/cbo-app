import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/GaleriaUnion-userflow.png'



function GaleriaUnion() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - GaleriaUnion</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>GaleriaUnion</h1>
        <a href='https://galeriaUnion.art/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>GaleriaUnion.mx es una plataforma que permite realizar búsquedas de puntos disponibles para anuncios en el espacio público de interés para campañas de comunicación en distintas áreas de la república mexicana.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol  Diseñador:  UI-UX , Desarrollador Front-End      </Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 20 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: Actual
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator,Vs code
          </Badge>
          <Badge bg="light" text="dark">Tecnologías: Scss, React, Node.js, Mailchimp</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>
          El proyecto fue tomado desde el inicio y se ha configurado de poco en poco de la mano de distintos diseñadores y dentro de diferentes actividades, el sitio ha cambiado bastante desde el día uno y se ha buscado iterar conforme las actividades de la galería


        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow GaleriaUnion.mx" /> */}



      </div>

    </div>
  )
}

export default GaleriaUnion

