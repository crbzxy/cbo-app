import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoFooter from '../img/logo-footer.png'
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";
import AOS from "aos";

import FooterImg2 from '../img/footer-img_1.png'


import "aos/dist/aos.css";
function Footer() {
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
    <section className='section footer' data-aos="fade-up">

      <img src={FooterImg2} data-aos="fade-up" className="footer-img2" alt="" />
      <footer className="container">
        <div className="row">
          <div className="col-md-12 footer-contact">

            <h5>¿Tienes un proyecto? <br /> ¡Hablemos! </h5>
            <Link className='btn-primario' to="/contacto"> ¡CONTÁCTAME!</Link>

          </div>
        </div>

        <div className="row  ">
          <div className="col-md-6">

            <img src={LogoFooter} className="LogoFooter" alt="Carlos Boyzo Oregón" />


          </div>
          <div className="col-md-6  rss" >
            <small>Sígueme en mis redes sociales</small>
            <ul className='rss-footer' >




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
              <ExternalLink href="https://foundation.app/@perrodimensional">
                <li>
                  <svg fill="none" viewBox="0 0 98 33" xmlns="http://www.w3.org/2000/svg" width={65}><path clipRule="evenodd" d="M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 0 1 1.358 0L35.056 30.66a.784.784 0 0 1-.679 1.176H.785a.784.784 0 0 1-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z" fill="currentColor" fillRule="evenodd" /></svg>

                </li>
              </ExternalLink>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer