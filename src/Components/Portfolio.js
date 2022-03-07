import React from 'react'
import Masonry from "react-masonry-css";
import Foto from "../img/oportunos.png";
import Foto2 from "../img/girlonrgb.png";

function Portfolio() {
  var items = [
    { id: 0, name: "My  Cero Item", img: `${Foto}` },
    { id: 1, name: "My First Item", img: `${Foto2}` },
    { id: 2, name: "Another item", img: `${Foto2}` },
    { id: 3, name: "Third Item", img: `${Foto2}` },
    { id: 4, name: "Here is the Fourth", img: `${Foto2}` },
    { id: 5, name: "High Five", img: `${Foto2}` },
  ];

  items = items.map(function (item) {
    return (


      <div className="card-portafolio-el " data-aos="fade-up" key={item.id}>
        <img src={item.img} alt="proyecto" />
        <div className="description-work">
          <h3 className="titulo mt-5">{item.name}</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, voluptatum!
          </p>
        </div>
      </div>

    );
  });
  const myBreakpointsAndCols = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1,
  };

  return (
    <section className="section2 portafolio " data-aos="fade-up">
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