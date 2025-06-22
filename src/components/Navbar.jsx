import React, { useState } from 'react';
import logo from '../assets/branding_cataly_logo.jpeg';
import LoginSignup from './LoginSignup';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const openModal = (mode) => {
    setAuthMode(mode);
    setModalOpen(true);
  };
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand Name */}
        <div className="navbar-brand">
          <div className="logo">
            <img 
              src= {logo}
              alt="Brand Logo" 
              width="100" 
              height="50"
            />
          </div>
          <span className="brand-name">Branding Catalyst</span>
        </div>

        {/* Desktop Navigation */}
        {/* <div className="navbar-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div> */}

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <button onClick={() => openModal('login')} className="btn btn-login">Login</button>
          <button onClick={() => openModal('signup')} className="btn btn-signup">Sign Up</button>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* <a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</a>
        <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</a>
        <a href="#services" className="mobile-nav-link" onClick={toggleMobileMenu}>Services</a>
        <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</a> */}
        <div className="mobile-auth">
          {/* <button className="btn btn-login mobile-btn" onClick={toggleMobileMenu} >Login</button>
          <button className="btn btn-signup mobile-btn" onClick={toggleMobileMenu}>Sign Up</button> */}
          <button onClick={() => openModal('login')} className="btn btn-login">Login</button>
          <button onClick={() => openModal('signup')} className="btn btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
    <LoginSignup isOpen={modalOpen} onClose={() => setModalOpen(false)} mode={authMode} />
    </>
    
  );
};

export default Navbar;