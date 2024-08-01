import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 20px 0;
  color: white;
  text-align: center;
  height: 45px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      margin: 0 5px;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Sunbulah Bakery And Sweets.</FooterText>
      <SocialLinks>
        <a href="https://www.facebook.com/alsunbulah.food/about" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/sunbulah.food/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
