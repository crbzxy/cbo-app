import React, { useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import NavBar from "../Components/NavBar";
import Me from "../img/me.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Colaboradores from "../Components/Colaboradores";
import CircleBlue from "../img/circle-blue.png";
import Pattern from "../img/pattern.png";
import Portfolio from "../Components/Portfolio";
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
      <NavBar />
      <section className="App-header " data-aos="fade-in">
        <img src={CircleBlue} alt="tran" className="circle-blue" />
        <div className="contenedor-hero">
          <div className="hero">
            <div className="texto">
              <h1>
                Diseñador UI-UX y desarrollador web con más de 4 años de
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
              <Link className="btn-primario" to="/contact">
                Conversemos 🔥
              </Link>
            </div>
            <img className="hero-img" src={Me} alt="" />
          </div>
        </div>
      </section>

      <section className="section " id="experiencia" data-aos="fade-up">
        <img src={Pattern} alt="tran" className="pattern" />
        <div className="contenedor">
          <h2>Mis servicios</h2>
          <div className="contenedor-experiencia">
            <div className="experiencia-card">
              <p className="titulo">
                Dirección de arte,
                comunicación y estrategia
              </p>
              <p>
                Planifiquemos  el desarrollo  por el camino más adecuado para lograr tus objetivos de comunicación digital.
              </p>
            </div>
            <div className="experiencia-card">
              <p className="titulo">Diseño UI/UX</p>
              <p>
                Construyamos soluciones e iteraciones con el uso de herramientas y metodologóas para una mejor experiencia de los usuarios.
              </p>
            </div>
            <div className="experiencia-card">
              <p className="titulo">Desarrollo Web</p>
              <p>
                Me encanta participar y trbajar en proyectos basados en tecnologías nuevas.
              </p>
            </div>
            <div className="experiencia-card">
              <p className="titulo">Optimización SEO</p>
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
      <section className="about  mb-5" data-aos="fade-up">
        <div className=" d-flex container">
          <div className="col  text-left"><img src="/" alt="imagen" /></div>
          <div className="col text-left  ">
            <small>Mucho gusto</small>
            <br />
            <h3>
              Diseñador UI-UX y desarrollador web con más de 4 años de
              experiencia.
            </h3>
            <p>
              He trabajado como consultor en desarrollo web ui-ux, creativo y manager para distintos clientes.
            </p>
            <p className="titulo">
              Áreas de conocimiento
            </p>
            <ul>
              <li>Desarrollo, diseño y resolución de problemas de manera creativa para productos digitales.</li>
              <li> Buen manejo tecnico de herramientas web.</li>
              <li>Entendimiento de nuevas tecnologias en general. </li>
              <li>Experiencia como como lider en equipos 2 o más integrantes.</li>
            </ul>
            <Link className="btn-primario" to="/contact">
              Conversemos 🔥
            </Link>
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
