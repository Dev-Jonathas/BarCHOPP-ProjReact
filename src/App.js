import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from './pages/Cadastro';
import HomePage from './pages/HomePage';
import ListagemPage from './pages/ListagemPage';

const App = () => {
  
  const [bebidas, setBebidas] = useState(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
    return localStorageItems;
  });

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(bebidas));
  }, [bebidas]);

  const handleCadastro = (novaBebida) => {
    setBebidas([...bebidas, novaBebida]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/cadastro" element={<Cadastro onCadastro={handleCadastro} />} />
          <Route path="/listagem" element={<ListagemPage bebidas={bebidas} />} />
          <Route path="/" element={<HomePage bebidas={bebidas} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
