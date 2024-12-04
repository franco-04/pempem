import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../components/styles/UsuarioTipo.css';

function EjerciciosTipo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; // Obtiene el tipo de usuario desde UsuarioTipo

  const handleExerciseSelection = (exerciseType) => {
    navigate('/cuestionario', { state: { userType, exerciseType } });
  };

  return (
    <main>
      <div className="container-usuariotipo">
        <p></p>
        <button
          className="button-usuario"
          onClick={() => handleExerciseSelection('Lectura')}
        >
          Lectura
        </button>
        <button
          className="button-usuario"
          onClick={() => handleExerciseSelection('Escritura')}
        >
          Escritura
        </button>
        <button
          className="button-usuario"
          onClick={() => handleExerciseSelection('Ambos')}
        >
          Ambos
        </button>
      </div>
    </main>
  );
}

export default EjerciciosTipo;
