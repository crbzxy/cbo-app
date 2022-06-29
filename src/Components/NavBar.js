import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import * as FaIcons from 'react-icons/fa';
//import Logo from '../logo.png';
import Logo from '../img/logo-m.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navBg, setNavBg] = useState('block');
  const [homePage, setHomePage] = useState('block');

  useEffect(() => {
    navegador();

    if (window.location.pathname === '/contacto') {
      setNavBg('none');
    } else {
      setNavBg('none');
    }

    if (window.location.pathname === '/design') {
      setNavBg('block');
      setHomePage('none');
    } else {
      setHomePage('block');
    }
  }, [location]);

  const navegador = () => {
    var navScr = document.getElementById('navScr');
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add('nav-colored');
        navScr.classList.remove('nav-transparent');
      } else {
        navScr.classList.add('nav-transparent');
        navScr.classList.remove('nav-colored');
      }
    };
  };

  return (
    <nav id='navScr' className='navbar '>
      <Link to='/' className='navbar_logo' onClick={closeMobileMenu}>
        <img src={Logo} alt='Carlos Boyzo Oregon' />
        <span> </span>
      </Link>
      <ul className={click ? 'navbar_menu active ' : 'navbar_menu'}>
        <Link
          to='/design'
          style={{ display: homePage }}
          className='navbar_menu_button navbar_menu_link'
          onClick={closeMobileMenu}>
          <li>
            {' '}
            <FaIcons.FaHome />{' '}
          </li>
        </Link>
        <a
          href='/design#portafolio'
          style={{ display: navBg }}
          className='navbar_menu_link m-h'
          onClick={closeMobileMenu}>
          <li> Portafolio </li> {/* {dropdown && <Dropdown />} */}
        </a>
        <a
          href='#sobremi'
          className='navbar_menu_link m-h'
          style={{ display: navBg }}
          onClick={closeMobileMenu}>
          <li> Sobre mí </li>
        </a>

        <a
          href='https://firebasestorage.googleapis.com/v0/b/cbo-assets.appspot.com/o/CV-Carlos-Boyzo-Oregon-DesarrolladorWeb-UI-UX%20(1).pdf?alt=media&token=5efde9a5-30ed-4912-b7c7-711fb90c0218'
          download>
          CV{' '}
        </a>

        <Link
          to='/contacto'
          className='navbar_menu_button navbar_menu_link'
          onClick={closeMobileMenu}>
          <li> Contacto </li>
        </Link>
        <ExternalLink href='https://www.instagram.com/perrodimensional/'>
          <li>
            <FaIcons.FaInstagram />
          </li>
        </ExternalLink>
        <ExternalLink href='https://github.com/crbzxy'>
          <li>
            <FaIcons.FaGithub />
          </li>
        </ExternalLink>
      </ul>
      <div className='navbar-icon' onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
