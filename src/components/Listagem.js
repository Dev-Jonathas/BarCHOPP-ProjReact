import React, { useEffect, useState } from 'react';
import './Listagem.css';

const Listagem = () => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
    setBebidas(localStorageItems);
  }, []);

  return (
    <section className="intro">
      <h1>BarCHOPP</h1>
      <h2>Lista Cadastrada!</h2>

      <div className="container">
        <ul>
          {bebidas.map((bebida, index) => (
            <li className='lista' key={index}>
              {bebida.nome} - {bebida.bebida} - {bebida.descricao}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Listagem;
