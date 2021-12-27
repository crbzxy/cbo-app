import React from 'react'
import logo from '../logo.svg';
function Start() {
  return (
    <section className="App-header">
      <div className="contenedor">
        <div className="card">
          <img src={logo} className='logo' alt="Carlos Boyzo Oregon" />
          <h1>UX-UI DEV ART🔥</h1>

          <p className='frase'><q>The true imagination is one that dynamites, elucidates, injects emerald microbes into other imaginations. In poetry and whatever, the entry into matter must already be the entry into adventure.</q>
            <br />
            <br />
            <small>Déjenlo todo, nuevamente by Roberto Bolaño México D. F. - 1976</small></p>

          <div className="contenedor-botones">
            <button className="btn-primario">Arte</button><button className="btn-primario">Diseño</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Start
