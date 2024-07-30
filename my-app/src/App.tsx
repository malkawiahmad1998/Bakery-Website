import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/CheckOutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <CartProvider>
    <Router>
      
      <div className='project-container'>
        <Header/>
          <div className='content'>
            
            
            
          </div>  
        <Footer/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ProductPage' element={<ProductPage/>}/>
        <Route path='/CartPage' element={<Cart/>}/>
        <Route path='/CheckOutPage' element={<Checkout/>}/>
        <Route path='/ContactPage' element={<ContactPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>



      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;
