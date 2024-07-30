import React, { useState } from 'react';
import '../style/ProductsPage.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

const ProductPage: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const cartContext = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { addToCart, cart } = cartContext;

  const products = [
    { id: 1, name: 'Chocolate Cake', price: '$10', image: 'https://lh3.googleusercontent.com/hG9dM7fPCObtNOq4h5Ql7jNNFim_5rPpwWVpx8stKIiH4caM4OT2SZR085iP861Feak61mliivlhtWZjeM_FsZZwueWmv1JV7dFoBOUD9BFlUa0E72qs=w523-h349-p' },
    { id: 2, name: 'Vanilla Cake', price: '$5', image: 'https://lovingitvegan.com/wp-content/uploads/2015/10/Vanilla-Cake-10.jpg' },
    { id: 3, name: 'Cheese Cake', price: '$8', image: 'https://oliofarchioni.com/wp-content/uploads/2022/07/cheesecake-senza-burro.jpg' },
    { id: 4, name: 'Arabian Bread', price: '$7', image: 'https://www.melskitchencafe.com/wp-content/uploads/2012/10/Pita2-jpg.jpg' },
    { id: 5, name: 'Hamam Bread', price: '$11', image: 'https://jo24.net/assets/2022-05-22/images/438124_6_1653204372.jpg' },
    { id: 6, name: 'French Bread', price: '$6', image: 'https://www.barbarabakes.com/wp-content/uploads/2020/08/Julia-Childs-French-Bread-Barbara-Bakes.jpg' },
    { id: 7, name: 'Vanilla Cupcake', price: '$6', image: 'https://th.bing.com/th/id/R.8c0433263d7676f94eadb0e990a1f14e?rik=WvNPjIoJ7Qui9A&pid=ImgRaw&r=0' },
    { id: 8, name: 'Lotus Cake', price: '$6', image: 'https://th.bing.com/th/id/OIP.Hhmmelwx06Hgl3NQrvRBegHaFH?rs=1&pid=ImgDetMain' },
  ];

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    const quantity = quantities[product.id] || 0;

    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantities(prev => ({ ...prev, [product.id]: 0 }));
      setAlertMessage(`${product.name} has been added to the cart with quantity ${quantity}`);
      setAlertSeverity('success');
      setOpen(true);
    } else {
      setAlertMessage('Please specify a quantity greater than zero.');
      setAlertSeverity('error');
      setOpen(true);
    }
  };

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + change, 0),
    }));
  };

  const getProductQuantity = (id: number) => quantities[id] || 0;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="products-page">
    <h2>Our Products</h2>
    <div className="products-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="conrolBtns">
            <button id='plusBtn' className='add-to-cart-button' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
            <span>{getProductQuantity(product.id)}</span>
            <button id='minusBtn' className='add-to-cart-button' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
          </div>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
  </div>
  );
};

export default ProductPage;
