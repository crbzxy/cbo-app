import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Start from "./Views/Start"
import './Scss/App.scss';

function App() {
  const [year, setYear] = useState(0);
  const getYear = () => setYear(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />

      </Routes>
      <small className="copyright">
        © {year} Made with 🖤  by <a href="/">Carlos Boyzo Oregon</a> 🔥
        All Rights Reserved
      </small>
    </div>
  );
}

export default App;
