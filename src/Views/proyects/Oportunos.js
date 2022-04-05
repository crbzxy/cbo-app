import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Components/NavBar'
import Manifiesto from '../Manifiesto'
import Badge from 'react-bootstrap/Badge'
function Oportunos() {
  return (
    <div>
      <Helmet>
        <title>CBO - Oportunos</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <Navbar />
      <section className="App-header-proyecto">
        <h1>Oportunos</h1>
      </section>
      <div className="contenedor proyecto-contenedor">
        <h2 style={{ fontSize: "85%" }}>
          Sobre el proyecto
        </h2>
        <p>Oportunos.mx es una plataforma que permite realizar búsquedas de puntos disponibles para anuncios en el espacio público de interés para campañas de comunicación en distintas áreas de la república mexicana.
        </p>
        <div className="contenedor-badges">

          <Badge bg="light" text="dark">
            Público objetivo - 20 a 70 años
            <strong></strong>          </Badge>

          <Badge bg="light" text="dark">
            <strong> Duración</strong> - 5 semanas
          </Badge>
          <Badge bg="light" text="dark">
            <strong>Herramientas</strong> - Adobe XD,Photoshop, Illustrator
          </Badge>
          <Badge bg="light" text="dark"><strong>Tecnologías</strong> - Scss, React, Node.js, Google maps API</Badge>
        </div>

        <h2 style={{ fontSize: "85%" }}>
          El reto del proyecto
        </h2>
        <p>
          El proyecto se retomó con el objetivo de actualizar y agregar nuevas funcionalidades al producto digital anterior, buscando una ventaja competitiva, donde el reto principal fue mantener la identidad visual haciendo uso de nuevas tecnologías que permitieran una mejora  en la experiencia de los usuarios y alinear lógicas del negocio a la campaña digital.

        </p>

      </div>
      <Manifiesto />
    </div>
  )
}

export default Oportunos

