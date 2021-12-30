import React from 'react'
import { Link } from "react-router-dom";
function Error404() {
  return (
    <section>
      <div className="contenedor">
        <h1>Error 404</h1>
        <p>Páginas no encontrada</p>
        <Link className="btn-primario" to="/">Regresar al home</Link>
      </div>
    </section>
  )
}

export default Error404
