import React from "react";
import Masonry from "react-masonry-css";
import Foto from "../img/oportunos.png";
import Foto2 from "../img/girlonrgb.png";
import { Link } from "react-router-dom";
import Pattern2 from "../img/pattern2.png";

function Portfolio() {
  var proyectos = [
    { id: 0, name: "Oportunos.mx", img: `${Foto}`, link: "/oportunos", description: "Oportunos.mx es una plataforma que permite realizar búsquedas de  anuncios en el espacio público de interés para campañas de marketing en distintas áreas de la república mexicana.", },
    {
      id: 1,
      name: "Galería Unión",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/Galeri%CC%81aUnion.png?alt=media&token=9ba9f9b1-c396-434b-9d2d-f063f73e228a`,
      link: "/galeria-union",
      description: "Oportunos.mx es una plataforma que permite realizar búsquedas de puntos disponibles para anuncios en el espacio público de interés para campañas de comunicación en distintas áreas de la república mexicana.",
    },
    {
      id: 2,
      name: "Lapi",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/all-devices-black.png?alt=media&token=2a1e7877-02d2-4170-b9b7-7cd98300bea1`,
      link: "/lapi",
    },
    { id: 3, name: "Ecoglobe", img: `${Foto2}`, link: "/ecoglobe" },
    {
      id: 4,
      name: "Ship Guru",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/shipguru.png?alt=media&token=cf9353ff-9231-43d5-a965-674e236941f5`,
      link: "/shipguru",
    },
    { id: 5, name: "ADSU", img: `${Foto2}`, link: "/adsu" },
    {
      id: 6,
      name: "Canalla Neza",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/Canalla.png?alt=media&token=278691b1-d8e8-47be-aa3b-a9255d6ffa59`,
      link: "/canalla-neza",
    },
    { id: 7, name: "Go pharma", img: `${Foto2}`, link: "/go-pharma" },
  ];

  proyectos = proyectos.map(function (item) {
    return (
      <Link to={item.link} key={item.id}>
        <div className="card-portafolio-el " data-aos="fade-up">
          <img src={item.img} alt="proyecto" />
          <div className="description-work">
            <h3 className="titulo mt-5">{item.name}</h3>
            <p className="desc">
              {item.description}
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
    <>
      <div id="portafolio" />
      <img src={Pattern2} alt="tran" className="pattern2" data-aos="fade-up" />
      <section className="section2 portafolio mt-5 " data-aos="fade-up">
        <div className="contenedor  " data-aos="fade-up">
          <small
            className="titulo"
            style={{ fontSize: "95%", paddingBottom: "0px !important" }}
          >
            Portafolio
          </small>
          <h2 className="text-left">Un poco de mi trabajo</h2>
          <div className="masonary-portafolio">
            <Masonry
              breakpointCols={myBreakpointsAndCols}
              className="my-masonry-grid contenedor-portafolio"
              columnClassName="my-masonry-grid_column"
              data-aos="fade-up"
            >
              {proyectos}
            </Masonry>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
