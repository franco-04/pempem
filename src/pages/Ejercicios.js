import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../components/styles/UsuarioTipo.css';

function Ejercicios() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType, exerciseType } = location.state || {}; // Recibe el estado de EjerciciosTipo

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

export default Ejercicios;
