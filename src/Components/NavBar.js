import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";
import Logo from '../logo.svg';
//import Logo from "../../img/logo.png";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    navegador();
  });
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
        <Link to="/work" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> Work </li> {/* {dropdown && <Dropdown />} */}
        </Link>
        <Link to="/about" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> About </li>
        </Link>

        <Link
          to="/services"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Services </li>
        </Link>
        <Link
          to="/contact"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Contact </li>
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