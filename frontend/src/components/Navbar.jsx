import React from 'react';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="p-4 bg-blue-900 text-white flex justify-between">
      <div className="flex items-center space-x-2">
    <img src="/logo.png" alt="MedVault Logo" className="w-8 h-8" />
    <span className="text-xl font-bold">MedVault</span>
  </div>
      
      {isLoggedIn && (
        <div className="space-x-4">
          <button>Dashboard</button>
          <button>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;