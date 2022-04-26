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

            Público objetivo: 20 a 70 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: 5 semanas
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark">Tecnologías: Scss, React, Node.js, Google maps API</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>
          El proyecto se retomó con el objetivo de actualizar y agregar nuevas funcionalidades al producto digital anterior, buscando una ventaja competitiva, donde el reto principal fue mantener la identidad visual haciendo uso de nuevas tecnologías que permitieran una mejora  en la experiencia de los usuarios y alinear lógicas del negocio a la campaña digital.

        </p>
        <h3>User flow</h3>
        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow GaleriaUnion.mx" /> */}



      </div>

    </div>
  )
}

export default GaleriaUnion

