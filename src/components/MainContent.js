import React from 'react';
import './styles/MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <section className="hero">
        <h2>"La comunicación transforma, la mariposa te guía"</h2>
        <div className="hexagons">
          {/* Puedes añadir hexágonos decorativos aquí */}
        </div>
      </section>
      <section className="images">
        <img src="ruta-de-tu-imagen1.png" alt="Niña jugando" />
        <img src="ruta-de-tu-imagen2.png" alt="Actividad infantil" />
      </section>
    </main>
  );
}

export default MainContent;
