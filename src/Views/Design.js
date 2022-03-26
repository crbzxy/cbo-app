import React, { useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import NavBar from "../Components/NavBar";
import Me from "../img/me-moshed.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import Colaboradores from "../Components/Colaboradores";
import CircleBlue from "../img/circle-blue.png";
import Pattern from "../img/pattern.png";
import Portfolio from "../Components/Portfolio";
import { Helmet } from "react-helmet-async";
//import { useAuth } from '../context/AuthContext'


function Design() {


  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: "ease-in-out",
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: "bottom-top",
    });
  }, []);


  return (
    <>
      <Helmet>
        <title>CBO - Diseño</title>
        <link rel="canonical" href="https://www.carlosboyzo.com/" />
      </Helmet>
      <NavBar />
      <section className="App-header " data-aos="fade-in">
        <img src={CircleBlue} alt="tran" className="circle-blue" />
        <div className="contenedor-hero">
          <div className="hero">
            <div className="texto">
              <h1>
                Diseñador y desarrollador web  UI-UX con más de 4 años de
                experiencia.
              </h1>
              <p>
                Hola, Soy Carlos Boyzo y me enfoco en crear soluciones y
                experiencias positivas que conecten los objetivos comerciales y
                las necesidades de mis colaboradores en diferente sectores.
              </p>
              <p>
                Actualmente soy Digital Manager en{" "}
                <ExternalLink href="https://go-pharma.mx/">
                  {" "}
                  Go Pharma
                </ExternalLink>
              </p>
              <Link className="btn-primario" to="/contacto">
                Conversemos 🔥
              </Link>
            </div>
            <img className="hero-img" src={Me} alt="" />
          </div>
        </div>
      </section>

      <section className="section " id="experiencia" data-aos="fade-up">
        <img src={Pattern} alt="tran" className="pattern" />
        <div className="contenedor text-left">

          <h2>Mis servicios</h2>
          <div className="contenedor-experiencia">
            <div className="experiencia-card">
              <h3 className="titulo">
                Estrategia y Dirección
              </h3>
              <p>
                Planifiquemos  el desarrollo  por el camino más adecuado para lograr tus objetivos de comunicación digital.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Diseño UI/UX</h3>
              <p>
                Construyamos soluciones e iteraciones con el uso de herramientas y metodologóas para una mejor experiencia de los usuarios.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Desarrollo Web</h3>
              <p>
                Me encanta participar y trabajar en proyectos basados en tecnologías nuevas.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Optimización SEO</h3>
              <p>
                Obtén más tráfico a tu sitio web, aparece en los buscadores y administra tu presencia digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <Portfolio />
      {/* Portafolio */}

      {/* About */}
      <br />
      <span id="sobremi" />
      <section className="about  mb-5" data-aos="fade-up">
        <div className=" d-flex container about-container">
          <div className="col  text-left"><img src={Me} alt="tran" style={{ filter: `blur(2px)`, borderRadius: '400px', maxWidth: '370px', margin: '16px', boxSizing: 'border-box', backgroundColor: '#101835' }} /></div>
          <div className="col text-left  ">
            <small>Mucho gusto</small>
            <br />
            <h3>
              Diseñador y desarrollador web  UI-UX con más de 4 años de
              experiencia.
            </h3>
            <p>
              He trabajado como consultor en desarrollo web ui-ux, creativo y manager para distintos clientes.
            </p>
            <p className="titulo">
              Competencias técnicas
            </p>
            <ul>
              <li>Diseño gráfico y comunicación visual para  wireframes y prototipos.</li>
              <li>Entendimiento de legunajes de programación web.</li>
              <li>Experiencia como como lider en equipos 2 o más integrantes.</li>
            </ul>
            <a href="https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/CV-CBO-ESP.pdf?alt=media&token=9e7323eb-9571-45f8-b701-b306ad3ba1a8" download className="btn-primario"> Descarga mi CV </a>
            <p>Sigueme en mis redes sociales</p>
            <ul className="redes">
              <ExternalLink href="https://www.instagram.com/perrodimensional/">
                <li>
                  <FaIcons.FaInstagram />
                </li>
              </ExternalLink>
              <ExternalLink href="https://github.com/crbzxy">
                <li>
                  <FaIcons.FaGithub />
                </li>
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/carlosboyzo/">
                <li>
                  <FaIcons.FaLinkedin />
                </li>
              </ExternalLink>
            </ul>

          </div>
        </div>
      </section>

      <Colaboradores />
    </>
  );
}

export default Design;
