import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../images/Vintage Retro Cake and Bakery Badge Logo.png';
import '../App.css';

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #ffff00 0%, #ffffcc 100%);
  height: 55px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  a, button {
    margin: 0 10px;
    color: black;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      display: block;
      margin: 5px 0;
    }
  }
`;

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      const currentUserPhoneNumber = localStorage.getItem('currentUserPhoneNumber');
      if (currentUserPhoneNumber) {
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const currentUser = users.find((user: any) => user.phoneNumber === currentUserPhoneNumber);
        if (currentUser) {
          setUserName(currentUser.name || '');
        } else {
          console.log('User not found in registeredUsers');
        }
      } else {
        console.log('No currentUserPhoneNumber in localStorage');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUserPhoneNumber');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/LoginPage');
  };

  return (
    <HeaderContainer>
      <a href='/'><img id='logoImage' src={logoImage} alt="Logo" /></a>
      <Logo style={{marginLeft:'-600px'}}>Sunbulah Bakery And Sweets</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/ProductPage">Products</Link>
        <Link to="/CartPage">Cart</Link>
        <Link to="/ContactPage">Contact</Link>
        {isLoggedIn ? (
          <>
          <button onClick={handleLogout}>Logout</button>
            <span style={{ margin: '0 10px', color: 'green', fontWeight: 'bold' }}>{userName}</span>
            
          </>
        ) : (
          <>
            <Link to="/LoginPage">Login</Link>
            <Link to="/RegisterPage">Register</Link>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
