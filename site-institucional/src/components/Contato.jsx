import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p className="subtitle">
          Estamos prontos para atendê-lo. Entre em contato conosco!
        </p>
        <div className="contato-content">
          <div className="info-cards">
            <div className="info-card">
              <div className="icon">📍</div>
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123<br/>Centro, Cidade - SP<br/>CEP: 12345-678</p>
            </div>
            <div className="info-card">
              <div className="icon">📞</div>
              <h3>Telefone</h3>
              <p>(11) 1234-5678<br/>(11) 98765-4321</p>
            </div>
            <div className="info-card">
              <div className="icon">✉️</div>
              <h3>E-mail</h3>
              <p>contato@empresa.com.br<br/>atendimento@empresa.com.br</p>
            </div>
            <div className="info-card">
              <div className="icon">🕐</div>
              <h3>Horário</h3>
              <p>Segunda a Sexta<br/>08:00 às 18:00</p>
            </div>
          </div>
          
          <div className="form-container">
            <form className="contato-form">
              <div className="form-group">
                <input type="text" placeholder="Seu Nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu E-mail" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu Telefone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-enviar">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
