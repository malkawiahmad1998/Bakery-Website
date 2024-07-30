import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import '../style/CheckOut.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CheckoutPage: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardNumber, setCardNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const location = useLocation();
  const { totalPrice } = location.state as { totalPrice: string };
  const navigate = useNavigate();
  const handleBackToCart = () => {
    navigate('/CartPage');
  };
  

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || (paymentMethod === 'visa' && !cardNumber)) {
      setAlertSeverity('error');
      setAlertMessage('Please fill in all required fields.');
      setOpen(true);
      return;
    }
    setAlertSeverity('success');
    setAlertMessage('Your order has been placed successfully!');
    setOpen(true);
// Clear cart or any other action after successful order
  // Delay navigation to home page

setTimeout(() => {
  navigate('/');
}, 2500); // 2 seconds
  };
  
  


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p className='total-amount'>Total Amount: ${totalPrice}</p>
      <div className="checkout-items">
        {/* Add your cart items display logic here */}
      </div>
      <div className="checkout-form">
        <h3>Shipping Information</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="payment-method">
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              value="visa"
              checked={paymentMethod === 'visa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Visa
          </label>
        </div>
        {paymentMethod === 'visa' && (
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        )}
        <div className='checkoutbtns '  style={{'display':'flex'}}>
                <button className='placeorderBtn' onClick={handleBackToCart} >Back to Cart</button>

        <button className="placeorderBtn" onClick={handlePlaceOrder
        }>

          Place Order
        </button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CheckoutPage;
