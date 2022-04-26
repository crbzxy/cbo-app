import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'
//import Masonry from 'react-masonry-css'
import Badge from 'react-bootstrap/Badge'



function Lapi() {

  const navigate = useNavigate();


  // Convert array to JSX items





  return (
    <div >
      <Helmet>
        <title>CBO - Lapi</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Lapi</h1>
        <a href='https://www.lapi.com.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h2>
          Sobre el proyecto
        </h2>
        <a href="https://xd.adobe.com/view/3a889726-7358-43b4-748e-c210237eba96-4cb9/" className='btn btn-outline-dark'> Ver prototipo</a>

        <p className='mt-5'>Lapi.mx es una plataforma del laboratorio lapi, con el cual busca acercar y dar a conocer distintos productos de orden farmacéutico, en donde se habilitó la funcionalidad de compra por medio de un carrito y la muestra de sus productos por categorías.

        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol:  Diseñador UI-UX , Desarrollador Front-End      </Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 18 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: 5 meses
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark">Tecnologías: Scss, Angular, Node.js, Material UI</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>
          Lapi solicitaba un rediseño de su producto digital anterior tomando como referencia una estrategia de benchmarking en donde se requería generar las mismas funcionalidades que sus competencia principal, asì como el desarrollo de una nueva identidad visual en torno a la imagen corporativa

        </p>


      </div>

      <div className="container">
        <h3>Vistas de prototipo</h3>
        <iframe title="lapi-iframe" width={1080} height={1024} src="https://xd.adobe.com/embed/3a889726-7358-43b4-748e-c210237eba96-4cb9/" frameBorder={0} allowFullScreen />

      </div>




    </div>
  )
}

export default Lapi

