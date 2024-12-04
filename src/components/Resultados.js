import React from 'react';

import './styles/Cuestionario.css'; // Importar los estilos del cuestionario


function Resultados({ puntos }) {
  return (
    <div>
      <h3>Resultados del cuestionario</h3>
      <ul>
        <li>LENGUAJE: {puntos.lenguaje}</li>
        <li>CRIANZA: {puntos.crianza}</li>
        <li>MADURATIVOS: {puntos.madurativos}</li>
        <li>ESCRITURA: {puntos.escritura}</li>
        <li>LECTURA: {puntos.lectura}</li>
      </ul>
    </div>
  );
}

export default Resultados;
