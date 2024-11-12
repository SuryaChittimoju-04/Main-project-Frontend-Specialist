import React from 'react';

const Button = ({ type = 'button', className = '', children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white rounded-lg px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
