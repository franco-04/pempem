import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Pem Pem</h1>
      </div>
      <nav className="menu">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/planes">Planes</a>
      </nav>
      <div className="login">
        <button>Sign In</button>
      </div>
    </header>
  );
}

export default Header;
