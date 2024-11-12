import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-lg font-bold">PHRMS</div>
      <button 
        onClick={onLogout} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
