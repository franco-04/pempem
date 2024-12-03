import React from 'react';
import './styles/MainContent.css';
import imagen1 from '../assets/imagen1.png'; // Importa la imagen desde la ruta de tu archivo
import imagen2 from '../assets/imagen2.png'; // Importa la imagen desde la ruta de tu archivo

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-container">
        {/* Contenedor derecho (ahora a la izquierda) */}
        <div className="right-content">
          <h3>Información Adicional</h3>
          <p>
            Aquí puedes colocar contenido adicional, como descripciones, enlaces o cualquier información relevante.
          </p>
          <button>Explorar más</button>
        </div>

        {/* Contenedor izquierdo (ahora a la derecha) */}
        <div className="left-content">
          <section className="hero">
            <h2>"La comunicación transforma, la mariposa te guía"</h2>
            <div className="hexagons">
              {/* Puedes añadir hexágonos decorativos aquí */}
            </div>
          </section>
          <section className="images">
            <img src={imagen1} alt="Niña jugando" />
            <img src={imagen2} alt="Actividad infantil" />
          </section>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
