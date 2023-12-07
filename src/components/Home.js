import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className="intro">
        <h1>BarCHOPP</h1>
        <h2>Veja as Bebidas Disponíveis</h2>
        <p>Confira nossa seleção de bebidas e faça seu pedido!</p>
      </section>
      
      <div className='imgb'>
        <section className="bebidas">
          <article className="bebida">
            <img src="/img/brahma.jpg" alt="brahma" />
            <h3>Brahma Chopp</h3>
            <p>Uma bebida refrescante para todos os momentos.</p>
          </article>

          <article className="bebida">
            <img src="/img/stella.jpg" alt="stella" />
            <h3>Stella Artois</h3>
            <p>Um bebida sofisticado para apreciadores.</p>
          </article>

          <article className="bebida">
            <img src="/img/heineken.png" alt="heineken" />
            <h3>Heineken</h3>
            <p>A bebida Mais procurada.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
