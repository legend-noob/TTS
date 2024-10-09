import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">DataWarehouse</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="login-button">Sign In</button>
    </nav>
  );
};

export default Navbar;
