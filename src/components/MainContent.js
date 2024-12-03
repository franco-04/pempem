import React from 'react';
import './styles/MainContent.css';
import imagen1 from '../assets/imagen1.png'; // Importa la imagen desde la ruta de tu archivo
import imagen2 from '../assets/imagen2.png'; // Importa la imagen desde la ruta de tu archivo
import imagen4 from '../assets/imagen4.png'; // Importa la imagen desde la ruta de tu archivo


function MainContent() {
  return (
    <>
      <main className="main-content">
        <div className="content-container">
          {/* Contenedor derecho (ahora a la izquierda) */}
          <div className="right-content">
            <section className="hero">
              <h2></h2>
            </section>
            <section className="images">
              <img src={imagen1} alt="Niña jugando" />
              <img src={imagen2} alt="Actividad infantil" />
            </section>
          </div>

          {/* Contenedor izquierdo (ahora a la derecha) */}
          <div className="hero">
            <div className="hexagons">
              {/* Puedes añadir hexágonos decorativos aquí */}
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <div className="hexagons2">
              {/* Puedes añadir hexágonos decorativos aquí */}
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <h3>Pem Pem</h3>
            <div className="hexagons3">
              {/* Puedes añadir hexágonos decorativos aquí */}
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <h2>"La comunicación transforma, la mariposa te guía"</h2>
            <button>Comienza ahora y permítenos acompañar a tu pequeño</button>
          </div>
        </div>
      </main>

      <section className="additional-info">
        <div className="info-content">
          <h4>Pem Pem</h4>
          <div className="text-image-container">
            <section className="text-image-container img">
              <img src={imagen4} alt="Mariposa" />
            </section>
            <div className="text">
              <p>La palabra "PeM PeM" es originaria del yokótan, lengua indígena que se habla en las zonas rurales de Tabasco. Su significado es MARIPOSA, este hermoso insecto representa la evolución, pues estas están en un cambio constante, al igual que los niños cada día adquieren nuevos conocimientos que transforman su forma de ver el mundo.</p>
            </div>
          </div>
        </div>


        <div className="info-content">
          <h5>Nuestro enfoque y objetivo</h5>
            <div className="text">
              <p> En México existen más de 700 millones de personas, sufren un trastorno que no solo afecta sus habilidades comunicación sino la autoestima y la socialización.
              Debido a esto PEM PEM fue creado como una herramienta para padres y maestros con el deseo de apoyar a niños a partir de los 3 años hasta los 9 con problemas de lenguaje y lectoescritura a mejorar la forma en la que se comunican y poder transmitir sus necesidades y darle voz a lo que piensan, observan y sienten.</p>
          </div>
        </div>


        <div className="content-container2">
          <h5>Nuestro enfoque y objetivo</h5>
            <div className="text">
              <p> En México existen más de 700 millones de personas, sufren un trastorno que no solo afecta sus habilidades comunicación sino la autoestima y la socialización.
              Debido a esto PEM PEM fue creado como una herramienta para padres y maestros con el deseo de apoyar a niños a partir de los 3 años hasta los 9 con problemas de lenguaje y lectoescritura a mejorar la forma en la que se comunican y poder transmitir sus necesidades y darle voz a lo que piensan, observan y sienten.</p>
          </div>
        </div>


        
      </section>


 
    </>
  );
}

export default MainContent;
