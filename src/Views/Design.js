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
import Pattern3 from "../img/pattern3.png"
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
              <small>Hola, Soy</small>
              <br />
              <h1>
                Carlos Boyzo, Diseñador y Dev web UI-UX-IXD.
              </h1>

              <p>
                Hola, me enfoco en crear soluciones y experiencias digitales  positivas,  que conecten  los objetivos comerciales de mis clientes en diferentes verticales de negocio.
              </p>
              <p>
                Actualmente soy Digital Manager en{" "}
                <ExternalLink href="https://go-pharma.mx/">
                  {" "}
                  Go Pharma
                </ExternalLink>
              </p>
              <Link className="btn-primario" to="/contacto">
                ✌🏼 Conversemos
              </Link>
            </div>
            <img className="hero-img" src={Me} alt="" />
          </div>
        </div>
      </section>

      <section className="section " id="experiencia" data-aos="fade-up">
        <img src={Pattern} alt="tran" className="pattern" data-aos="fade-up" />
        <div className="contenedor text-left">

          <h2>Mis servicios</h2>
          <div className="contenedor-experiencia">
            <div className="experiencia-card">
              <h3 className="titulo">
                Estrategia y Dirección digital
              </h3>
              <p>
                Planifiquemos el desarrollo por el camino más adecuado para lograr tus objetivos de comunicación digital.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Diseño UI/UX/IXD</h3>
              <p>
                Construyamos soluciones, prototipos y  wireframes, con herramientas y metodologías para una mejor experiencia de los usuarios en productos y comunicación digital.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Desarrollo Web</h3>
              <p>
                Usemos herramientas eficientes, con presupuestos a la medida y avancemos al siguiente nivel, usando tecnologías nuevas con las mejores prácticas.
              </p>
            </div>
            <div className="experiencia-card">
              <h3 className="titulo">Optimización SEO</h3>
              <p>
                Obtén más tráfico en  tus productos digitales, aparece en los principales buscadores y administra tu presencia digital para mejorar tus campañas publicitarias y posicionamiento.

              </p>
            </div>

            <div className="experiencia-card">
              <h3 className="titulo">Arte Digital </h3>
              <p>
                Generemos diseño, videos y recursos de apoyo al área comercial para que tu marca o producto digital destaque todo su potencial.
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
      <img src={Pattern3} alt="tran" className="pattern3" data-aos="fade-up" />
      <section className="about  mb-5" data-aos="fade-up">
        <div className=" d-flex container about-container">
          <div className="col  img-left"><img src={Me} alt="tran" style={{ filter: `blur(1px)`, borderRadius: '400px', maxWidth: '300px', margin: '16px', boxSizing: 'border-box', backgroundColor: '#101835' }} /></div>
          <div className="col text-left  ">
            <small>Mucho gusto</small>
            <br />
            <h3>
              Soy Diseñador y desarrollador web UI-UX-IXD con más de 4 años de experiencia.
            </h3>
            <p>
              He trabajado como consultor en desarrollo web, creativo y manager para distintos clientes.
            </p>
            <p className="titulo">
              Competencias técnicas
            </p>
            <ul>
              <li>Diseño gráfico y comunicación visual para  wireframes y prototipos</li>
              <li>Entendimiento de legunajes de programación web</li>
              <li>Experiencia como como lider en equipos</li>
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
