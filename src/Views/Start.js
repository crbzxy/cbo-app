import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import CircleBlue from '../img/circle-blue.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//import Pattern3 from "../img/me-moshed.gif"
import Me from '../img/me-moshed.gif';
import Dassets from '../img/3dassets.png';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet-async';
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
  }, []);
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  console.info(user);
  console.info(handleLogout);
  console.log(user);
  if (loading)
    return (
      <section>
        <div className='contenedor' data-aos='fade-in'>
          <h1>Loading</h1>
        </div>
      </section>
    );
  return (
    <>
      <Helmet>
        <title>Carlos Boyzo Oregón</title>
        <link rel='canonical' href='https://www.carlosboyzo.com/' />
      </Helmet>
      <section className='about-start  pb-5' data-aos='fade-up'>
        <div className='row'>
          <div className=' container'>
            <img
              src={Dassets}
              className='  portafolio-img-start'
              alt='Carlos Boyzo Oregón 3d'
            />
          </div>
        </div>
        <img src={logo} className='conten-logo' alt='' />
        <img
          style={{ top: '1vh' }}
          src={CircleBlue}
          alt='tran'
          className='circle-blue assets'
        />
        <div className=' d-flex container about-container'>
          <div className='col  img-left'>
            <img
              src={Me}
              alt='tran'
              style={{
                filter: `blur(1px)`,
                borderRadius: '400px',
                maxWidth: '280px',
                margin: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#101835',
              }}
            />

            <br />
            <p className='frase' style={{ TextAlign: 'left', padding: '2rem' }}>
              <q>
                La verdadera imaginación es aquella que dinamita, elucida,
                inyecta microbios esmeraldas en otras imaginaciones. En poesía y
                en lo que sea, la entrada en materia tiene que ser ya la entrada
                en aventura.
              </q>
            </p>

            <small>
              Déjenlo todo, nuevamente by <strong>Roberto Bolaño </strong>{' '}
              México D. F. - 1976
            </small>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <iframe
              className='spotify'
              title='spotify'
              style={{ borderRadius: 12 }}
              src='https://open.spotify.com/embed/playlist/4uAi1Lc3rCwfbvSu0LBgxr?utm_source=generator'
              width='70%'
              height={80}
              frameBorder={0}
              allowFullScreen
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            />

            <br />
            <br />
          </div>
          <div className='col text-left  '>
            <small>MX/CDMX</small>
            <br />
            <h1>Carlos Boyzo Oregón</h1>
            <br />
            <p className='titulo' style={{ fontSize: '100%' }}>
              Diseñador y desarrollador web UI-UX
            </p>
            <p>
              Hola, me enfoco en crear soluciones y experiencias digitales
              positivas, que conecten los objetivos comerciales de mis clientes
              en diferentes verticales de negocio.
            </p>
            <p className='titulo'>Competencias técnicas</p>
            <ul>
              <li>
                Diseño gráfico y comunicación visual para wireframes y
                prototipos
              </li>
              <li>Diseño de interfaces y experiencias de usuario</li>
              <li>Experiencia como como lider en equipos</li>
              <li>Desarrollador Web</li>
            </ul>
            <p>Sígueme en mis redes sociales</p>
            <a href='https://github.com/crbzxy' className='btn-primario'>
              {' '}
              GITHUB{' '}
            </a>
            <a
              href='https://objkt.com/profile/tz1QFG3JhYPB6LUK76qBoB1E7TYYCABsmND9/created'
              className='btn-primario'>
              {' '}
              objkt.com{' '}
            </a>
            <a
              href='https://www.instagram.com/perrodimensional/'
              className='btn-primario'>
              {' '}
              Instagram{' '}
            </a>
            <a
              href='https://www.linkedin.com/in/carlosboyzo/'
              className='btn-primario'>
              {' '}
              LinkedIn{' '}
            </a>
            <br />
            <a
              href='https://firebasestorage.googleapis.com/v0/b/cbo-assets.appspot.com/o/CV-Carlos-Boyzo-Oregon-DesarrolladorWeb-UI-UX%20(1).pdf?alt=media&token=5efde9a5-30ed-4912-b7c7-711fb90c0218'
              download
              className='btn-secundario'>
              {' '}
              Descarga mi CV{' '}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Start;
