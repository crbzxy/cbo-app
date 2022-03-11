import React from 'react'
import Masonry from "react-masonry-css";
import Foto from "../img/oportunos.png";
import Foto2 from "../img/girlonrgb.png";
import { Link } from 'react-router-dom'
function Portfolio() {
  var items = [
    { id: 0, name: "Oportunos.mx", img: `${Foto}`, link: '/oportunos' },
    { id: 1, name: "Galería Unión", img: `${Foto2}`, link: '/galaria-union' },
    { id: 2, name: "Lapi", img: `${Foto2}`, link: '/lapi' },
    { id: 3, name: "Ecoglobe", img: `${Foto2}`, link: '/ecoglobe' },
    { id: 4, name: "Ship Guru", img: `${Foto2}`, link: '/Ship Guru' },
    { id: 5, name: "Adsu", img: `${Foto2}`, link: '/adsu' },
    { id: 5, name: "Canalla Neza", img: `${Foto2}`, link: '/canalla-neza' },
    { id: 5, name: "Go pharma", img: `${Foto2}`, link: '/canalla-neza' },
  ];

  items = items.map(function (item) {
    return (


      <Link to={item.link} key={item.id}>
        <div className="card-portafolio-el " data-aos="fade-up" >
          <img src={item.img} alt="proyecto" />
          <div className="description-work">
            <h3 className="titulo mt-5">{item.name}</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptatum!
            </p>
          </div>
        </div>
      </Link>

    );
  });
  const myBreakpointsAndCols = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1,
  };

  return (
    <section className="section2 portafolio mt-5 " data-aos="fade-up">
      <div className="contenedor  " data-aos="fade-up">
        <small className="text-left">Portafolio</small>
        <h2 className="text-left">Un poco de mi trabajo</h2>
        <div className="masonary-portafolio">
          <Masonry
            breakpointCols={myBreakpointsAndCols}
            className="my-masonry-grid contenedor-portafolio"
            columnClassName="my-masonry-grid_column"
            data-aos="fade-up"
          >
            {items}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default Portfolio