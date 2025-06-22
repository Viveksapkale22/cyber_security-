import React, { useState, useEffect } from 'react';
import './LoginSignup.css';

const LoginSignup = ({ isOpen, onClose, mode }) => {
  const [isLogin, setIsLogin] = useState(mode === 'login');

  useEffect(() => {
    setIsLogin(mode === 'login');
  }, [mode]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        <form>
          {!isLogin && <input type="text" placeholder="Username" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="cyber-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>

        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default LoginSignup;
