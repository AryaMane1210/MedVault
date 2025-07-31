import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
   const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/'); 
    };

  return (
    <nav className="p-4 bg-blue-900 text-white flex justify-between">
      <div className="flex items-center space-x-2">
    <img src="/logo.png" alt="MedVault Logo" className="w-8 h-8" />
    <span className="text-xl font-bold">MedVault</span>
  </div>
      
      {isLoggedIn && (
        <div>
        <button
            className="bg-yellow-600 hover:bg-yellow-500 px-3 py-1 rounded"
            onClick={() => navigate('/settings')}
          >
            Settings
          </button>
          <button
            className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
          </div>
      )}
    </nav>
  );
};

export default Navbar;