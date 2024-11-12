import React from 'react';

const Card = ({ children, style = {} }) => {
  return (
    <div
      style={{
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        backgroundColor: '#fff',
        ...style, // Allow custom styles to be passed and merged
      }}
    >
      {children}
    </div>
  );
};

export default Card;
