import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './scss/App.scss';
import GeneralRouter from './Routes/GeneralRouter';
import { HelmetProvider } from "react-helmet-async";


function App() {
  const [year, setYear] = useState(0);
  const getYear = () => setYear(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])


  return (
    <>
      <div className="App">
        <HelmetProvider>
          <GeneralRouter />
        </HelmetProvider>
      </div>
      <small className="copyright">
        © {year} Desarrollado con  🖤  por <a className='ml' href="/"> Carlos Boyzo Oregón</a> 🔥
        Todos los derechos reservados
      </small>
    </>
  );
}

export default App;
