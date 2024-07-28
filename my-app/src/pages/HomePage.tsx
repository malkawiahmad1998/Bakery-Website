import React from 'react';
import Products from '../components/Products';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
        <Hero/>
        <Products/>
      
      
    </div>
  );
}

export default HomePage;