import React from 'react';
import { useState } from 'react';
import "./Contador.css";

const Contador = () => {

    const [contador, setContador] = useState(0);

    /**
     * Si count es mayor o igual a 0 se ira sumando.
     */
    const incrementarContador = () => {
        if (contador >= 0) {
            setContador(contador + 1);
        }
    }

    /**
    * Si count es mayor o igual a 1, entonces restara.
    */
    const decrementarContador = () => {
        if (contador >= 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="center">
        <div class="main"></div>
        <div className="contador">
          <h1>{contador}</h1>
        </div>
        <div className="boton">
          <button className="btn" onClick={decrementarContador}>
            <p>-</p>
          </button>
          <button className="btn" onClick={incrementarContador}>
            <p>+</p>
          </button>
        </div>
      </div>
    );
}

export default Contador;
