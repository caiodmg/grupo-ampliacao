import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Estrutura from './components/Estrutura';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import AgendarVisita from './components/AgendarVisita';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <QuemSomos />
      <Estrutura />
      <Servicos />
      <Contato />
      <AgendarVisita />
      <Footer />
    </div>
  );
}

export default App;
