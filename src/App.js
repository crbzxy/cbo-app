import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/App.scss';
import GeneralRouter from './Routes/GeneralRouter';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className='App'>
      <HelmetProvider>
        <GeneralRouter />
      </HelmetProvider>
      <small className='copyright'>
        © {year} Desarrollado con 🖤 por{' '}
        <a className='ml' href='/'>
          {' '}
          Carlos Boyzo Oregón
        </a>{' '}
        🔥 Todos los derechos reservados
      </small>
    </div>
  );
}

export default App;
