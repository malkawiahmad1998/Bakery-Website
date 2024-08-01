import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../images/Vintage Retro Cake and Bakery Badge Logo.png'
import '../App.css'

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #ffff00 0%, #ffffcc 100%);
  height:55px;
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
  a {
    margin: 0 10px;
    color:black;
    text-decoration: none;
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
  return (
    <HeaderContainer>
      <a href='/'><img id='logoImage' src={logoImage}></img></a>
      <Logo style={{marginLeft:'-780px'}}>Sunbulah Bakery And Sweets</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/ProductPage">Products</Link>
        <Link to="/CartPage">Cart</Link>
        <Link to="/ContactPage">Contact</Link>

      </Nav>
    </HeaderContainer>
  );
};

export default Header;
