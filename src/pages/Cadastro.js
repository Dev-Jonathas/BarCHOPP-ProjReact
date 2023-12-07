import React from 'react';
import CadastroForm from '../components/CadastroForm';

const Cadastro = ({ onCadastro }) => {
  return (

    <div>
      <section className="intro">
        <h1>BarCHOPP</h1>
        <h2>Cadastre uma nova Bebida!</h2>
      </section>

      <section className="cadastro">
        <CadastroForm onCadastro={onCadastro} />
      </section>
    </div>
  );
};

export default Cadastro;
