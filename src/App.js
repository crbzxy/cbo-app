import React, { useState, useEffect } from 'react';

import './Scss/App.scss';

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
        © {year} Desarrollado con  🖤  por <a href="/">Carlos Boyzo Oregon</a> 🔥
        Todos los derechos reservados
      </small>
    </>
  );
}

export default App;
