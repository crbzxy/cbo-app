import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'

import Badge from 'react-bootstrap/Badge'
//import UserFlow from '../../img/TiendaEnLinea-userflow.png'



function TiendaEnLinea() {
  const navigate = useNavigate();


  return (
    <div>
      <Helmet>
        <title>CBO - Tienda en línea</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/galeria-union" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <button className='goback' onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Regresar</button>

        <h1>Tienda En Linea</h1>
        <a href='https://tiendaenlinea.adn.com.mx/' className='btn btn-outline-light'>visitar</a>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h3>
          Sobre el proyecto
        </h3>
        <p>Tienda en línea es una plataforma para la solicitud de creación de una  tienda en línea de manera segura y accesible para que aproveches los beneficios de vender en internet.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">

            Rol  Diseñador:  UI-UX, Desarrollador Web Front End y Backend</Badge>
          <Badge bg="light" text="dark">

            Público objetivo: 20 a 90 años      </Badge>

          <Badge bg="light" text="dark">
            Duración: 3 semanas
          </Badge>
          <Badge bg="light" text="dark">
            Herramientas: Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark">Tecnologías:Scss, HTML5</Badge>
        </div>

        <h3>
          El reto del proyecto
        </h3>
        <p>

          TiendaEnLinea es un proyecto que se presento como un ejercicio de benchmarking por parte de Seccion Amarilla y con el cual se busca obtener nuevos clientes que deseen obtener una eccommerce.

        </p>

        {/* <img className='img-fluid pb-4' src={UserFlow} alt="User-Flow TiendaEnLinea.mx" /> */}


      </div>

    </div>
  )
}

export default TiendaEnLinea

