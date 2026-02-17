import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <div className="logo">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="15" r="8" fill="#FF6B6B"/>
              <circle cx="15" cy="30" r="8" fill="#4ECDC4"/>
              <circle cx="35" cy="30" r="8" fill="#FFD93D"/>
              <circle cx="25" cy="40" r="8" fill="#6BCF7F"/>
            </svg>
          </div>
          <div className="brand">
            <h1>Grupo Ampliação</h1>
            <p className="slogan">Novos Horizontes, Novas possibilidades</p>
          </div>
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('quem-somos')}>Quem somos</a></li>
            <li><a onClick={() => scrollToSection('estrutura')}>Estrutura</a></li>
            <li><a onClick={() => scrollToSection('servicos')}>Serviços</a></li>
            <li><a onClick={() => scrollToSection('contato')}>Contato</a></li>
            <li><a onClick={() => scrollToSection('agendar')} className="btn-agendar">Agendar visita</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
