// src/pages/HomePage.js
import React from 'react';
import Home from '../components/Home';

const HomePage = ({ bebidas }) => {
  return (
    <div>
      <Home bebidas={bebidas} />
    </div>
  );
};

export default HomePage;
