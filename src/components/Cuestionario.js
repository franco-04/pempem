import React, { useState } from 'react';
import './styles/Cuestionario.css'; // Asegúrate de tener el archivo CSS
import { useLocation } from 'react-router-dom';

function Cuestionario() {
  const location = useLocation();
  const { userType, exerciseType } = location.state || {}; // Recibe el estado de EjerciciosTipo
  
  const [puntos, setPuntos] = useState({
    lenguaje: 100,
    crianza: 100,
    madurativos: 100,
    escritura: 100,
    lectura: 100
  });

  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    diaNacimiento: '',
    embarazoSemana: '',
    complicacionEmbarazo: '',
    complicacionDetalle: '',
    causas: '',
    danoNino: '',
    areasAfectadas: [],
    retrasoMadurativo: '',
    edadMental: '',
    gateo: '',
    edadCamino: '',
    hijoUnico: '',
    cuantosHermanos: '',
    rolFamilia: '',
    conviveCon: '',
    relacionPersona: '',
    actividades: ''
  });

  // Actualiza las respuestas del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        areasAfectadas: [...formData.areasAfectadas, name]
      });
    } else {
      setFormData({
        ...formData,
        areasAfectadas: formData.areasAfectadas.filter((area) => area !== name)
      });
    }
  };

  // Función para calcular los puntos
  const actualizarPuntos = () => {
    let nuevosPuntos = { ...puntos };

    // Lógica de los puntos según las respuestas

    // Restar 15 puntos en CRIANZA(RS) y MADURATIVOS(ES) si nació entre 2015 y 2022
    if (parseInt(formData.diaNacimiento.split('-')[0]) >= 2015) {
      nuevosPuntos.crianza -= 15;
      nuevosPuntos.madurativos -= 15;
    }

    // Si el área afectada es AUDITIVA se resta 1 punto en LENGUAJE(A)
    if (formData.areasAfectadas.includes('AUDITIVA')) {
      nuevosPuntos.lenguaje -= 1;
    }

    // Si el área afectada es MOTRIZ se restan puntos en ESCRITURA
    if (formData.areasAfectadas.includes('MOTRIZ')) {
      nuevosPuntos.escritura -= 9; // Restar 3 en cada subcategoría de ESCRITURA
    }

    // Si el área afectada es MADURATIVA
    if (formData.areasAfectadas.includes('MADURATIVA')) {
      nuevosPuntos.crianza -= 3;
      nuevosPuntos.crianza -= 3;
      nuevosPuntos.madurativos -= 3;
    }

    // Si presenta retraso madurativo se restan puntos en varias categorías
    if (formData.retrasoMadurativo === 'si') {
      nuevosPuntos.escritura -= 9;
      nuevosPuntos.madurativos -= 3;
      nuevosPuntos.crianza -= 3;
    }

    // Si la edad mental es 1 o 2 se restan puntos
    if (formData.edadMental === '1' || formData.edadMental === '2') {
      nuevosPuntos.crianza -= 5;
      nuevosPuntos.madurativos -= 3;
    }

    // Si la edad madurativa es mayor o igual a 3 se restan 10 puntos
    if (parseInt(formData.edadMental) >= 3) {
      nuevosPuntos.crianza -= 10;
      nuevosPuntos.madurativos -= 10;
    }

    // Si gateó
    if (formData.gateo === 'si') {
      nuevosPuntos.escritura += 5;
    }

    // Si no gateó
    if (formData.gateo === 'no') {
      nuevosPuntos.escritura -= 5;
      nuevosPuntos.madurativos -= 5;
    }

    // Si caminó entre 1 y 2 años
    if (formData.edadCamino >= 1 && formData.edadCamino <= 2) {
      nuevosPuntos.escritura += 5;
    }

    // Si caminó después de los 2 años
    if (formData.edadCamino > 2) {
      nuevosPuntos.escritura -= 5;
    }

    // Si tiene <= 2 hermanos
    if (parseInt(formData.cuantosHermanos) <= 2) {
      nuevosPuntos.lectura += 10;
    }

    // Si tiene > 2 hermanos
    if (parseInt(formData.cuantosHermanos) > 2) {
      nuevosPuntos.lectura -= 3;
      nuevosPuntos.crianza += 5;
    }

    // Si juega el rol de mayor
    if (formData.rolFamilia === 'MAYOR') {
      nuevosPuntos.madurativos += 5;
    }

    // Si juega el rol de menor
    if (formData.rolFamilia === 'MENOR') {
      nuevosPuntos.madurativos += 2;
    }

    // Si juega el rol de del medio
    if (formData.rolFamilia === 'DEL MEDIO') {
      nuevosPuntos.madurativos += 3;
    }

    // Si convive mayormente con otros
    if (formData.conviveCon === 'OTROS') {
      nuevosPuntos.crianza -= 10;
    }

    // Si convive mayormente con abuelos
    if (formData.conviveCon === 'ABUELOS') {
      nuevosPuntos.crianza -= 3;
    }

    // Si convive mayormente con padres
    if (formData.conviveCon === 'PADRES') {
      nuevosPuntos.crianza += 5;
    }

    // Si convive mayormente con hermanos
    if (formData.conviveCon === 'HERMANOS') {
      nuevosPuntos.crianza -= 5;
    }

    // Relación con la persona (autoritaria, democrática, etc.)
    if (formData.relacionPersona === 'AUTORITARIA') {
      nuevosPuntos.crianza -= 5;
    }

    // Actividades recreativas
    if (formData.actividades === 'al aire libre') {
      nuevosPuntos.escritura += 10;
      nuevosPuntos.crianza += 20;
      nuevosPuntos.madurativos += 25;
    }

    // Actualiza el estado con los nuevos puntos
    setPuntos(nuevosPuntos);
  };

  return (
    <div className="cuestionario">
      <h2>Cuestionario de Evaluación</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Preguntas */}
        <label>Nombre del menor:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <label>Edad del menor:</label>
        <input
          type="text"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />
        <label>Fecha de nacimiento del menor (AAAA-MM-DD):</label>
        <input
          type="text"
          name="diaNacimiento"
          value={formData.diaNacimiento}
          onChange={handleChange}
        />
        <label>¿En qué semana concluyó su embarazo?</label>
        <select name="embarazoSemana" onChange={handleChange}>
          <option value="+39">+39</option>
          <option value="-39">-39</option>
        </select>

        <label>¿Hubo alguna complicación durante el embarazo?</label>
        <select name="complicacionEmbarazo" onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label>¿Qué complicación tuvo?</label>
        <input
          type="text"
          name="complicacionDetalle"
          value={formData.complicacionDetalle}
          onChange={handleChange}
        />

        <label>¿Causó algún daño en el niño?</label>
        <select name="danoNino" onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label>¿Qué áreas afectó?</label>
        <input
          type="checkbox"
          name="AUDITIVA"
          checked={formData.areasAfectadas.includes('AUDITIVA')}
          onChange={handleCheckboxChange}
        /> Audición
        <input
          type="checkbox"
          name="NEUROLOGICA"
          checked={formData.areasAfectadas.includes('NEUROLOGICA')}
          onChange={handleCheckboxChange}
        /> Neurológica
        <input
          type="checkbox"
          name="MOTRIZ"
          checked={formData.areasAfectadas.includes('MOTRIZ')}
          onChange={handleCheckboxChange}
        /> Motriz

        <label>¿Retraso madurativo?</label>
        <select name="retrasoMadurativo" onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label>Edad mental del niño:</label>
        <input
          type="number"
          name="edadMental"
          value={formData.edadMental}
          onChange={handleChange}
        />

        <label>¿Gateó?</label>
        <select name="gateo" onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label>¿A qué edad comenzó a caminar?</label>
        <input
          type="number"
          name="edadCamino"
          value={formData.edadCamino}
          onChange={handleChange}
        />

        <label>¿Es hijo único?</label>
        <select name="hijoUnico" onChange={handleChange}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <label>¿Cuántos hermanos tiene?</label>
        <input
          type="number"
          name="cuantosHermanos"
          value={formData.cuantosHermanos}
          onChange={handleChange}
        />

        <label>¿Qué rol juega en la familia?</label>
        <select name="rolFamilia" onChange={handleChange}>
          <option value="MAYOR">Mayor</option>
          <option value="MENOR">Menor</option>
          <option value="DEL MEDIO">Del Medio</option>
        </select>

        <label>¿Con quién convive más?</label>
        <select name="conviveCon" onChange={handleChange}>
          <option value="PADRES">Padres</option>
          <option value="HERMANOS">Hermanos</option>
          <option value="ABUELOS">Abuelos</option>
          <option value="OTROS">Otros</option>
        </select>

        <label>¿Cómo es la relación con la persona que lo cuida?</label>
        <select name="relacionPersona" onChange={handleChange}>
          <option value="AUTORITARIA">Autoritaria</option>
          <option value="DEMOCRATICA">Democrática</option>
        </select>

        <label>¿Qué actividades recreativas realiza?</label>
        <select name="actividades" onChange={handleChange}>
          <option value="al aire libre">Al aire libre</option>
        </select>

        <button type="button" onClick={actualizarPuntos}>Calcular Puntos</button>
      </form>

      <div>
        <h3>Puntos actuales</h3>
        <ul>
          <li>LENGUAJE: {puntos.lenguaje}</li>
          <li>CRIANZA: {puntos.crianza}</li>
          <li>MADURATIVOS: {puntos.madurativos}</li>
          <li>ESCRITURA: {puntos.escritura}</li>
          <li>LECTURA: {puntos.lectura}</li>
        </ul>
      </div>
    </div>
  );
}

export default Cuestionario;
