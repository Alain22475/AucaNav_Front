import React from 'react';
import './styles/Header.css';
import logo from '../images/auca_logo.jpg'; // Adjust the path if it's in public

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="App Logo" className="logo" />
      <h1>AUCA Navigate</h1>
    </div>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About & Policies</a>
      <a href="/contact">Contact & Feedbacks</a>
    </nav>
  </header>
);

export default Header;
