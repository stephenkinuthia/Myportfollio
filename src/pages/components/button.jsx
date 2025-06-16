import React from 'react';
import "./styles/button.css"

const Button = ({ label, onClick, type = 'button', className = 'learn-more' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;

