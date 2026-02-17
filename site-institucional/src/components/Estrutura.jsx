import React from 'react';
import './Estrutura.css';

const Estrutura = () => {
  const estruturas = [
    {
      title: "Infraestrutura Moderna",
      description: "Instalações de última geração com tecnologia de ponta para atender todas as necessidades.",
      icon: "🏢"
    },
    {
      title: "Ambiente Climatizado",
      description: "Espaços totalmente climatizados proporcionando conforto em todas as estações.",
      icon: "❄️"
    },
    {
      title: "Segurança 24h",
      description: "Sistema de monitoramento e segurança funcionando ininterruptamente.",
      icon: "🔒"
    },
    {
      title: "Estacionamento",
      description: "Amplo estacionamento para visitantes e colaboradores.",
      icon: "🚗"
    },
    {
      title: "Acessibilidade",
      description: "Instalações completamente adaptadas para pessoas com mobilidade reduzida.",
      icon: "♿"
    },
    {
      title: "Áreas de Convivência",
      description: "Espaços projetados para conforto e interação.",
      icon: "🌳"
    }
  ];

  return (
    <section id="estrutura" className="estrutura">
      <div className="container">
        <h2>Nossa Estrutura</h2>
        <p className="subtitle">
          Oferecemos um ambiente completo e preparado para proporcionar a melhor experiência
        </p>
        <div className="grid">
          {estruturas.map((item, index) => (
            <div key={index} className="card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estrutura;
