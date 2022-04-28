import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'
//import Masonry from 'react-masonry-css'
import Badge from 'react-bootstrap/Badge'



function Oportunos() {

  const navigate = useNavigate();


  // Convert array to JSX items





  return (
    <div >
      <Helmet>
        <title>CBO - Oportunos</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Oportunos</h1>
        <a href='https://oportunos.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h2>
          Sobre el proyecto
        </h2>
        <a href="https://xd.adobe.com/view/8058de30-eb6f-4925-825f-1e4d556672e9-d50b/" className='btn btn-outline-dark'> Ver prototipo</a>

        <p className='mt-5'>Oportunos.mx es una plataforma que permite realizar búsquedas de puntos disponibles para anuncios en el espacio público de interés para campañas de comunicación en distintas áreas de la república mexicana.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol:  Diseñador UI-UX , Desarrollador Front-End      </Badge>
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


      </div>
      <h3>Vistas de prototipo</h3>
      <div className="container">
        <iframe title='iframe' width={1386} height={900} src="https://xd.adobe.com/embed/8058de30-eb6f-4925-825f-1e4d556672e9-d50b/" frameBorder={0} allowFullScreen />
      </div>




    </div>
  )
}

export default Oportunos

