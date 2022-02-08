import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function Start() {
  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])
  return (


    <>
      <section section className="App-header" data-aos="fade-in" >
        <div className="contenedor">
          <div className="card">
            <img src={logo} className='logo' alt="Carlos Boyzo Oregón" />
            <h1>UX-UI DEV ART</h1>

            <p className='frase'><q>La verdadera imaginación es aquella que dinamita, elucida, inyecta microbios esmeraldas en otras imaginaciones. En poesía y en lo que sea, la entrada en materia tiene que ser ya la entrada en aventura.</q>
            </p>

            <small>Déjenlo todo, nuevamente by Roberto Bolaño México D. F. - 1976</small>

            <div className="contenedor-botones">
              <button className="btn-primario">Arte</button>
              <Link to="/design" className="btn-primario">Diseño</Link>
            </div>

          </div>
        </div>
      </section >
    </>
  )
}

export default Start
