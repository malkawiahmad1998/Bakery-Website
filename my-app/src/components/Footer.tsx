import React from 'react';
import styled,{keyframes} from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const FooterContainer = styled.footer`
  background: linear-gradient(45deg, #6b6b6b, #333);
  padding: 20px 0;
  color: white;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
    animation: ${fadeIn} 1s ease-in-out;


  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #f0c14b;
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
