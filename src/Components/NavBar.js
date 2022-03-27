import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";
import Logo from '../logo.svg';
//import Logo from "../../img/logo.png";


function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navBg, setNavBg] = React.useState("block");


  useEffect(() => {
    navegador();
    if (window.location.pathname === "/contacto") {
      setNavBg("none");
    } else {
      setNavBg('block')
    }
  }, [location]);

  const navegador = () => {
    var navScr = document.getElementById("navScr");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add("nav-colored");
        navScr.classList.remove("nav-transparent");
      } else {
        navScr.classList.add("nav-transparent");
        navScr.classList.remove("nav-colored");
      }
    };
  };





  return (
    <nav id="navScr" className="navbar ">
      <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
        <img src={Logo} alt="Carlos Boyzo Oregon" />
        <span>  </span>
      </Link>
      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        <a href="#portafolio" style={{ display: navBg }} className="navbar_menu_link m-h" onClick={closeMobileMenu}>
          <li> Portafolio </li> {/* {dropdown && <Dropdown />} */}
        </a>
        <a href="#sobremi" className="navbar_menu_link m-h" style={{ display: navBg }} onClick={closeMobileMenu}>
          <li> Sobre mí </li>
        </a>


        <a href="https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/CV-CBO-ESP.pdf?alt=media&token=9e7323eb-9571-45f8-b701-b306ad3ba1a8" download>CV </a>

        <Link
          to="/contacto"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Contacto </li>
        </Link>
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
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>

    </nav>
  );
}


export default Navbar;