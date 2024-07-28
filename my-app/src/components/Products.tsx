import React from 'react';
import '../style/Products.css';
import ChoclateCake from '../images/ChoclateCake.jpg'
import VanillaCupCake from '../images/VanillaCupCake.jpg'
import CheeseCake from '../images/cheesecake-senza-burro.jpg'
const Products: React.FC = () => {
  return (
    <section id="products">
      <h2>Featured Products</h2>
      <div className="product-list">
        <div className="product">
          <img src={ChoclateCake} className='card-image'></img>
          <h3>Chocolate Cake</h3>
          <p>A rich and moist chocolate cake, drizzled with a luscious chocolate sauce.</p>
        </div>
        <div className="product">
          <img src={VanillaCupCake} className='card-image'></img>
          <h3>Vanilla Cupcakes</h3>
          <p>Light and fluffy vanilla cupcakes topped with buttercream frosting.</p>
        </div>
        <div className="product">
          <img src={CheeseCake} className='card-image'></img>
          <h3>Cheesecake</h3>
          <p>A creamy cheesecake filling on a classic graham cracker crust, topped with a flavorful blueberry sauce.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
