import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/Adsu-userflow.png'



function Adsu() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - Adsu</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Adsu</h1>
        <a href='https://Adsu.com.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>Adsu es un servicio de reparación  de electrodomésticos de línea blanca a domicilios en México.
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

          Este proyecto se heredó como servicio de Sección Amarilla para un rediseño en el look and feel de la marca buscando resolver las necesidades del cliente como una nueva presencia digital que respetara y aportara a una presencia en el mercado de más de 40 años.


        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow Adsu.mx" /> */}


      </div>
      <iframe title='adsu' width="1080" height="786" src="https://xd.adobe.com/embed/b904cbfe-e36f-4528-8d62-406d4bf374ce-ec57/" frameborder="0" allowfullscreen></iframe>
    </div>
  )
}

export default Adsu

