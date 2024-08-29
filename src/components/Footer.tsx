import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2024 Skjemaløsning</p>
        <ul>
          <li><a href="#privacy">Personvern</a></li>
          <li><a href="#terms">Vilkår</a></li>
          <li><a href="#contact">Kontakt oss</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
