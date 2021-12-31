import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import NavBar from "../Components/NavBar"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Design() {
  useEffect(() => {
    gsap.from('.hero', {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: 'ease-in-out',
    });
    gsap.from('.section', {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.contenedor',

        start: 'bottom 90%',
        end: 'bottom 6%',
        toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });

    gsap.from('.section2', {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.contenedor2',

        start: 'top 90%',
        end: 'top 6%',
        toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, [])


  return (
    <>
      <NavBar />
      <section className="App-header ">
        <div className="contenedor">
          <div className="hero">
            <div className="texto">
              <small>Hola, soy</small>
              <h1>Carlos Boyzo, Diseñador UI-UX y desarrollador web con más de 3 años de experiencia.</h1>
              <p>
                Me enfoco en crear soluciones y experiencias positivas que conecten los objetivos comerciales con las necesidades de los usuarios y empresas.
              </p>
              <Link className="btn-primario" to="/contact">CONTÁCTAME 👍🏽
              </Link>
            </div>
            <img className="hero-img" src="https://ipfs.io/ipfs/Qmepq3hKDAWqsLqiBU4hciHU3w6vJ1a2DUxBQ4jGCdwJs7" alt="" />
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="contenedor">
          <h2>hola</h2>
        </div>
      </section>
      <section className="section2 ">
        <div className="contenedor2">
          <h2>hola</h2>
        </div>
      </section>


    </>
  )
}

export default Design
