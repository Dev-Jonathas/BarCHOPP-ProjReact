// src/pages/ListagemPage.js
import React from 'react';
import Listagem from '../components/Listagem';

const ListagemPage = ({ bebidas }) => {
  return (
    <div>
      <Listagem bebidas={bebidas} />
    </div>
  );
};

export default ListagemPage;
