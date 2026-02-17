import React, { useState } from 'react';
import './AgendarVisita.css';

const AgendarVisita = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    horario: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Solicitação de visita enviada com sucesso! Entraremos em contato em breve.');
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="agendar" className="agendar-visita">
      <div className="container">
        <div className="content-wrapper">
          <div className="info-section">
            <h2>Agende sua Visita</h2>
            <p className="intro">
              Conheça pessoalmente nossas instalações e tire todas as suas dúvidas 
              com nossa equipe especializada.
            </p>
            
            <div className="beneficios">
              <h3>Por que agendar uma visita?</h3>
              <ul>
                <li>
                  <span className="icon">👁️</span>
                  <div>
                    <strong>Conheça nossa estrutura</strong>
                    <p>Veja de perto todas as nossas instalações</p>
                  </div>
                </li>
                <li>
                  <span className="icon">💬</span>
                  <div>
                    <strong>Atendimento personalizado</strong>
                    <p>Receba orientação específica para suas necessidades</p>
                  </div>
                </li>
                <li>
                  <span className="icon">📋</span>
                  <div>
                    <strong>Tire suas dúvidas</strong>
                    <p>Converse diretamente com nossa equipe</p>
                  </div>
                </li>
                <li>
                  <span className="icon">🎯</span>
                  <div>
                    <strong>Soluções sob medida</strong>
                    <p>Descubra a melhor opção para você</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-section">
            <div className="form-card">
              <h3>Preencha o formulário</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nome Completo *</label>
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>E-mail *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Telefone *</label>
                  <input 
                    type="tel" 
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Data Preferencial *</label>
                    <input 
                      type="date" 
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Horário *</label>
                    <select 
                      name="horario"
                      value={formData.horario}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Observações</label>
                  <textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Conte-nos mais sobre seu interesse..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-agendar-submit">
                  Confirmar Agendamento
                </button>
                
                <p className="form-note">
                  * Campos obrigatórios. Entraremos em contato para confirmar sua visita.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendarVisita;
