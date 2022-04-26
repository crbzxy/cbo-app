import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/GoPharma-userflow.png'



function GoPharma() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - Go Pharma</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>GoPharma</h1>
        <a href='https://go-pharma.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>Agencia de CONSULTORÍA, MKT & MEDIA especializada en el mercado PHARMA y el sector SALUD. Desarrollamos estrategias integradas desde market research hasta la ejecución de la planeación, siempre enfocados a RESULTADOS.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol  Diseñador:  UI-UX, Desarrollador Web Front End y Backend</Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 20 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: Actual
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator,Firebase
          </Badge>
          <Badge bg="light" text="dark">Tecnologías:React, Node.js, Nodemailer</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>

          GoPharma es un proyecto que se retomó de una primera versión y en donde se dar un giro total a sus estratégias de marketing y medios de comunicación digitales, dando soporte no solo a sitios web, si no camapañas de marketing, aplicaticos web como calculadoras y assets digitales para diversos clientes del mundo pharma.

        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow GoPharma.mx" /> */}


      </div>

    </div>
  )
}

export default GoPharma

