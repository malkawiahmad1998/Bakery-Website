import React, { useState, useContext } from 'react';
import '../style/ProductsPage.css';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  const { addToCart } = cartContext;

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
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      setAlertSeverity('error');
      setAlertMessage('Please log in to add items to the cart.');
      setOpen(true);
      navigate('/LoginPage');
      return;
    }

    if (quantities[product.id] > 0) {
      addToCart({ ...product, quantity: quantities[product.id] });
      setQuantities(prev => ({ ...prev, [product.id]: 0 }));
      setAlertSeverity('success');
      setAlertMessage(`${product.name} has been added to the cart with quantity ${quantities[product.id]}`);
      setOpen(true);
    } else {
      setAlertSeverity('error');
      setAlertMessage('Please select a quantity greater than zero.');
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
      <IconButton 
  onClick={() => navigate('/CartPage')} 
  sx={{
    color:'black',
    backgroundColor:'#d2d23e',
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000,
    animation: 'pulse 1s ease-in-out infinite',
    '&:hover': {
      color: 'white',
      backgroundColor:'#d2d23e',
      transition:'.3s',
      transform: 'scale(1.6)',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    }
  }} 
  color="primary"
>
  <ShoppingCartIcon />
</IconButton>
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
