import React from 'react';
import '../components/styles/UsuarioTipo.css'; // Asegúrate de que el archivo CSS exista

function UsuarioTipo() {
  return (
    <main> {/* Se puede usar <main> para mejorar la estructura semántica */}
      <div className="container-usuariotipo">
        <button className="button-usuario">Maestro</button>
        <button className="button-usuario">Padre de familia</button>
      </div>
    </main>
  );
}

export default UsuarioTipo;
