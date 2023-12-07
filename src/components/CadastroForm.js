import React, { useState, useEffect } from 'react';
import './CadastroForm.css';

const CadastroForm = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [bebida, setBebida] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    console.log('Componente CadastroForm foi montado!'); }, []); 

  const handleCadastro = () => {
    if (nome && bebida && descricao) {
      onCadastro({ nome, bebida, descricao });

      const novoItem = { nome, bebida, descricao };
      const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
      localStorageItems.push(novoItem);
      localStorage.setItem('itens', JSON.stringify(localStorageItems));

      setNome('');
      setBebida('');
      setDescricao('');

      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className='centered-form'>
      <div className='form'>
        <h2>Cadastro</h2>
  
        <div className="grid-container">
          <div className="grid-item">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
  
          <div className="grid-item">
            <label htmlFor="bebida">Nome da Bebida:</label>
            <input id="bebida" type="text" value={bebida} onChange={(e) => setBebida(e.target.value)} />
          </div>
          
          <div className="grid-item">
            <label htmlFor="descricao">Descrição:</label>
            <input id="descricao" type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          </div>
  
          <div className="grid-item button-container">
            <button onClick={handleCadastro}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
  };  

export default CadastroForm;
