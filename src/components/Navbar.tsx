import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">Skjemaløsning</Link>
      </div>
      <ul className="navbar__menu">
        <li><Link to="/features">Funksjoner</Link></li>
        <li><Link to="/about">Om Oss</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      <button className="navbar__cta">Kom i gang</button>
    </nav>
  );
};

export default Navbar;
