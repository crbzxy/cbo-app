import React, { useState, useEffect } from 'react';

import './scss/App.scss';

import GeneralRouter from './Routes/GeneralRouter';



function App() {
  const [year, setYear] = useState(0);
  const getYear = () => setYear(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])
  return (
    <>
      <div className="App">

        <GeneralRouter />

      </div>
      <small className="copyright">
        © {year} Desarrollado con  🖤  por <a className='ml' href="/"> Carlos Boyzo Oregón</a> 🔥
        Todos los derechos reservados
      </small>
    </>
  );
}

export default App;
