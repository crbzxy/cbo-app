
import './Scss/App.scss';
import { Routes, Route } from "react-router-dom";
import Start from "./Views/Start"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />

      </Routes>
    </div>
  );
}

export default App;
