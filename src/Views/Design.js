import React, { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom'
import NavBar from "../Components/NavBar"
import Me from "../img/me.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Colaboradores from "../Components/Colaboradores"
import CircleBlue from "../img/circle-blue.png"
import Pattern from "../img/pattern.png"
import Masonry from 'react-masonry-css'
import Foto from "../img/oportunos.png"
import Foto2 from "../img/girlonrgb.png"
//import { useAuth } from '../context/AuthContext'


function Design() {
  var items = [
    { id: 0, name: 'My  Cero Item', img: `${Foto}` },
    { id: 1, name: 'My First Item', img: `${Foto2}` },
    { id: 2, name: 'Another item', img: `${Foto}` },
    { id: 3, name: 'Third Item', img: `${Foto}` },
    { id: 4, name: 'Here is the Fourth', img: `${Foto}` },
    { id: 5, name: 'High Five', img: `${Foto}` }
  ];
  items = items.map(function (item) {
    return <> <div className="card-portafolio-el " key={item.id}>
      <img src={item.img} alt="proyecto" />
      <div className="description-work">
        <h3 className="titulo mt-5">{item.name}</h3>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum!</p>
      </div>
    </div></>
  });
  const myBreakpointsAndCols = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

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
      <NavBar />
      <section className="App-header " data-aos="fade-in">
        <img src={CircleBlue} alt="tran" className="circle-blue" />
        <div className="contenedor-hero">
          <div className="hero">
            <div className="texto">

              <h1>Diseñador UI-UX y desarrollador web con más de 4 años de experiencia.</h1>
              <p>
                Hola, Soy Carlos Boyzo y me enfoco en crear soluciones y experiencias positivas que conecten los objetivos comerciales y las necesidades de mis colaboradores en diferente sectores.
              </p>
              <p>Actualmente soy Digital Manager en <ExternalLink href="https://go-pharma.mx/"> Go Pharma</ExternalLink></p>
              <Link className="btn-primario" to="/contact">Conversemos 🔥
              </Link>
            </div>
            <img className="hero-img" src={Me} alt="" />
          </div>
        </div>


      </section>
      <section className="section " id='experiencia' data-aos="fade-up">
        <img src={Pattern} alt="tran" className="circle-blue" />
        <div className="contenedor">




          <h2>Mis habilidades</h2>
          <div className="contenedor-experiencia">
            <div className="experiencia-card"><p className="titulo">Dirección de arte, <br />comunicación y estrategia</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem fuga tempora.</p></div>
            <div className="experiencia-card"><p className="titulo">Diseño UI/UX</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem fuga tempora.</p></div>
            <div className="experiencia-card"><p className="titulo">Desarrollo Web</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem fuga tempora.</p></div>
            <div className="experiencia-card"><p className="titulo">Optimización SEO</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem fuga tempora.</p></div>
          </div>
        </div>
      </section>
      <section className="section2 portafolio " data-aos="fade-up">

        <div className="contenedor ">
          <small className='text-left'>Portafolio</small>
          <h2 className='text-left'>Un poco de mi trabajo</h2>
          <div className="masonary-portafolio">


            <Masonry
              breakpointCols={myBreakpointsAndCols}
              className="my-masonry-grid contenedor-portafolio"
              columnClassName="my-masonry-grid_column"
            >
              {items}
            </Masonry>

          </div>

        </div>
      </section>
      <section className="about" data-aos="fade-up">
        <div className="contenedor">
          <small>Mucho gusto</small>
          <h3>Diseñador UI-UX y desarrollador web con más de 4 años de experiencia.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, earum perferendis ipsam tempora voluptatem commodi. Dignissimos quibusdam deserunt tenetur porro beatae qui.</p>
          <p>Sigueme en mis redes sociales</p>
          <ul>
            <li>rss</li>
            <li>rss</li>
            <li>rss</li>
          </ul>
          <Link className="btn-primario" to="/contact">Conversemos 🔥
          </Link>
        </div>

      </section>

      <Colaboradores />

    </>
  )
}

export default Design
