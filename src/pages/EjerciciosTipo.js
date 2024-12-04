import React from 'react';
import '../components/styles/UsuarioTipo.css'; 

function EjerciciosTipo() {
  return (
    <main> {/* Se puede usar <main> para mejorar la estructura semántica */}
      <div className="container-usuariotipo">
        <button className="button-usuario">Lectura</button>
        <button className="button-usuario">Escritura</button>
        <button className="button-usuario">Ambos</button>

      </div>
    </main>
  );
}

export default EjerciciosTipo;
