import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../style/CartPage.css';
import emptyCartLogo from '../images/R.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartContext;

  const getProductQuantity = (productId: number) => {
    const product = cart.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.slice(1)) * getProductQuantity(product.id), 0).toFixed(2);
  };

  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    navigate('/CheckOutPage', { state: { totalPrice } });
  };

  return (
    <div className="cart-page">
      {cart.length > 0 ? (
        <>
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <div className="product-controls">
                  <button className="control-buttons" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span>{getProductQuantity(product.id)}</span>
                  <button className="control-buttons" onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button 
                  onClick={() => removeFromCart(product.id)} 
                  className="remove-item-button"
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3 style={{'color':'#34a63a'}}>Total: ${calculateTotalPrice()}</h3>
          </div>
          <div className="cart-buttons">
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        </>
      ) : (
        <div>
          <img src={emptyCartLogo} id="emptyCartLogo" alt="Empty Cart" />
          
        </div>
      )}
    </div>
    
  );
};

export default Cart;
