import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Grupo Ampliação</h3>
            <p>
              Novos Horizontes, Novas possibilidades. 
              Comprometidos com a excelência e inovação.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#estrutura">Estrutura</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>📍 Rua Exemplo, 123 - Centro</li>
              <li>📞 (11) 1234-5678</li>
              <li>✉️ contato@empresa.com.br</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Grupo Ampliação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
