import React, { useState, useEffect } from 'react';
import './QuemSomos.css';

const QuemSomos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Para usar fotos locais, coloque-as em src/assets/ e importe assim:
  // import foto1 from '../assets/foto1.jpg';
  // Depois substitua o src abaixo por: src: foto1
  const images = [
    { src: 'https://placehold.co/600x400/4ECDC4/white?text=Foto+1', alt: 'Foto da empresa 1' },
    { src: 'https://placehold.co/600x400/6BCF7F/white?text=Foto+2', alt: 'Foto da empresa 2' },
    { src: 'https://placehold.co/600x400/FF8C42/white?text=Foto+3', alt: 'Foto da empresa 3' },
    { src: 'https://placehold.co/600x400/FF6B6B/white?text=Foto+4', alt: 'Foto da empresa 4' },
  ];

  // Avança automaticamente a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <section id="quem-somos" className="quem-somos">
      <div className="container">
        <h2>Quem Somos</h2>
        <div className="content">
          <div className="text">
            <p>
              O Grupo Ampliação é um espaço de convivência e desenvolvimento dedicado 
              ao atendimento de adultos (a partir de 18 anos) com Transtorno do Espectro Autista (TEA), 
              Deficiência Intelectual e síndromes associadas, como Angelman e Cornélia de Lange.
            </p>
            <p>
              Situados na Praia da Enseada, no Guarujá (SP), estamos inseridos em um contexto urbano estratégico
              que favorece a socialização. Nossa missão é atuar como um agente facilitador, oferecendo o suporte 
              necessário para que cada indivíduo conquiste maior autonomia e encontre seu espaço de pertencimento 
              na família e na comunidade.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>20+</h3>
                <p>Anos de experiência</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Clientes satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="image">
            <div className="carousel">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <img key={index} src={img.src} alt={img.alt} className="carousel-img" />
                ))}
              </div>

              <button className="carousel-btn prev" onClick={prev}>&#8249;</button>
              <button className="carousel-btn next" onClick={next}>&#8250;</button>

              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
