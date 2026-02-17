import React from 'react';
import './Servicos.css';

const Servicos = () => {
  const servicos = [
    {
      title: "Consultoria Especializada",
      description: "Equipe qualificada pronta para oferecer orientação e suporte personalizado para suas necessidades específicas.",
      features: ["Análise completa", "Plano personalizado", "Acompanhamento contínuo"]
    },
    {
      title: "Atendimento Premium",
      description: "Atendimento diferenciado com foco na excelência e satisfação do cliente.",
      features: ["Atendimento prioritário", "Equipe dedicada", "Suporte 24/7"]
    },
    {
      title: "Soluções Personalizadas",
      description: "Desenvolvemos soluções sob medida para atender exatamente o que você precisa.",
      features: ["Projetos customizados", "Flexibilidade", "Inovação constante"]
    }
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="subtitle">
          Oferecemos uma gama completa de serviços para atender todas as suas necessidades
        </p>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="card-header">
                <h3>{servico.title}</h3>
              </div>
              <div className="card-body">
                <p>{servico.description}</p>
                <ul>
                  {servico.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
