import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/CheckOutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';

// Component to conditionally render Header and Footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const noHeaderFooter = ['/LoginPage', '/RegisterPage'].includes(location.pathname);

  return (
    <div className='project-container'>
      {!noHeaderFooter && <Header />}
      <div className='content'>
        {children}
      </div>
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/ProductPage' element={<Layout><ProductPage /></Layout>} />
          <Route path='/CartPage' element={<Layout><Cart /></Layout>} />
          <Route path='/CheckOutPage' element={<Layout><Checkout /></Layout>} />
          <Route path='/ContactPage' element={<Layout><ContactPage /></Layout>} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
};

export default App;
