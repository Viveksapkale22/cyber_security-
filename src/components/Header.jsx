import React,{ useState } from 'react';
import './Header.css';
import background from '../assets/coding.gif';
import LoginSignup from './LoginSignup';


const Header = () => {
const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const openModal = (mode) => {
    setAuthMode(mode);
    setModalOpen(true);
  };
  return (
    <>
    <header className="cyber-header">
      {/* Background GIF image */}
      <img
        src={background}
        alt="Cyber Background"
        className="background-gif"
      />

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Glassmorphism content */}
      <div className="glass-box">
        <h1>The Cybersecurity System</h1><br></br>
        <p>Empowering digital safety with intelligent solutions.</p><br></br>
        <button onClick={() => openModal('login')} className="cta-button">Click Here</button>
      </div>
      
    </header>
     <LoginSignup isOpen={modalOpen} onClose={() => setModalOpen(false)} mode={authMode} />
    </>
    

  );
};

export default Header;
