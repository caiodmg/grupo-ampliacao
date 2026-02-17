import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAgendar = () => {
    const element = document.getElementById('agendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Grupo Ampliação</h1>
        <p>Novos Horizontes, Novas Possibilidades</p>
        <div className="hero-buttons">
          <button onClick={scrollToAgendar} className="btn-primary">
            Agende uma Visita
          </button>
          <button 
            onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })} 
            className="btn-secondary"
          >
            Conheça Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
