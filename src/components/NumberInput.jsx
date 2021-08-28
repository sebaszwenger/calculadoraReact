import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
// import "../src/App.css";

const NumberInput = ({ name }) => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  const { numero1, numero2 } = numeros;

  const handleInputChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  return (
    <>
      <label className="inputLabel">
        Numero 1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleInputChange}
          type="number"
        />
      </label>

      <label className="inputLabel">
        Numero 2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleInputChange}
          type="number"
        />
      </label>

      <Resultado operacion="suma" calculo={numero1 + numero2} />
      <Resultado operacion="resta" calculo={numero1 - numero2} />
      <Resultado operacion="multiplicacion" calculo={numero1 * numero2} />
      <Resultado operacion="division" calculo={numero1 / numero2} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
  calculo: PropTypes.number,
  operacion: PropTypes.string,
};

export default NumberInput;
