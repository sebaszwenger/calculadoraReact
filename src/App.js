import React from "react";
import Calculadora from "./components/Calculadora";
import "./App.css";

const App = () => {
  return (
    <div className="contenedor">
      <h1>Calculadora - PWA</h1>
      <hr />
      <Calculadora />
    </div>
  );
};

export default App;
