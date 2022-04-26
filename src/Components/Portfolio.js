import React from "react";
import Masonry from "react-masonry-css";
import Foto from "../img/oportunos.png";
//import Foto2 from "../img/girlonrgb.png";
import { Link } from "react-router-dom";
import Pattern2 from "../img/pattern2.png";
import Dassets from "../img/3dassets.png";
function Portfolio() {
  var proyectos = [
    { id: 0, name: "Oportunos.mx", img: `${Foto}`, link: "/oportunos", description: "Oportunos.mx es una plataforma que permite realizar búsquedas de  anuncios en el espacio público de interés para campañas de marketing en distintas áreas de la república mexicana.", },
    {
      id: 1,
      name: "Galería Unión",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/Galeri%CC%81aUnion.png?alt=media&token=9ba9f9b1-c396-434b-9d2d-f063f73e228a`,
      link: "/galeria-union",
      description: "Galería Unión es un proyecto independiente creado recientemente en la Ciudad de México, trabajamos como plataforma de difusión y venta de arte contemporáneo.",
    },
    {
      id: 2,
      name: "Lapi",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/all-devices-black.png?alt=media&token=2a1e7877-02d2-4170-b9b7-7cd98300bea1`,
      link: "/lapi",
      description: "Lapi, rediseño y desarrollo ui-ux de una plataforma de gestión de inventarios para una empresa de servicios de salud.",
    },
    { id: 3, name: "Ecoglobe", img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/ecoglobe.png?alt=media&token=2bc4ebb4-e139-4b94-8f67-033abd3f13d8`, link: "/ecoglobe", description: "Desarrollo de sitio web para la empresa Ecoglobe, empresa dedicada a la intalación de sistemas de energia solar en Tijuana, Baja California." },
    {
      id: 4,
      name: "Ship Guru",
      img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/shipguru.png?alt=media&token=cf9353ff-9231-43d5-a965-674e236941f5`,
      link: "/shipguru",
      description: "Desarrollo de logo para Ship Gurú plataforma empresarial de paquetería y envíos en México. ",
    },
    { id: 5, name: "ADSU", img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/adsu.png?alt=media&token=dbe410fb-656c-4585-ae8a-797a7ee4f8db`, link: "/adsu", description: " Empresa con más de 40 años en el mercado especializada en soluciones de reparación y mantenimiento de línea blanca" },

    { id: 6, name: "Go pharma", img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/go-pharma.png?alt=media&token=acc55d03-e19a-4329-870a-d5ece6057ecc`, link: "/go-pharma" },
    { id: 7, name: "ADN Tienda en línea", img: `https://firebasestorage.googleapis.com/v0/b/react-auth-cbo-app.appspot.com/o/tiendaenlinea.png?alt=media&token=b2100705-f312-4021-a1ef-1a342cc0fd5a`, link: "/tienda-en-linea", description: "Landing page para registro de leads de la campaña (Tienda en línea de ADN Secciòn Amarilla)", },
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
        <img src={Dassets} className="portafolio-img" data-aos="fade-up" alt="Carlos Boyzo Oregòn" />

      </section>
    </>
  );
}

export default Portfolio;
