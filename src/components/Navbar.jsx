// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Pastikan path ini benar

const Navbar = ({ onMenuItemClick, isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (content) => {
    onMenuItemClick(content);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            
          </Link>
        </div>

        {/* Center Title for Mobile */}
        <div className="lg:hidden flex-grow flex justify-center">
          <span className="text-lg font-semibold">Sengkang cak</span>
        </div>

        {/* Menu Items for Large Screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link to="/contact" className="px-3 py-2 text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
          <Link to="/about" className="px-3 py-2 text-gray-400 hover:text-white transition-colors duration-300">About</Link>
          <Link to={isLoggedIn ? "/" : "/login"} onClick={isLoggedIn ? handleLogout : null} className="px-3 py-2 text-gray-400 hover:text-white transition-colors duration-300">
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
            <svg
              className={`h-6 w-6 fill-current transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Box for Menu Items */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-11/12 max-w-md lg:max-w-lg transform transition-transform duration-300 scale-95">
            <div className="flex justify-between items-center mb-4">
              <img src={logo} alt="Logo" className="h-10" />
              <button onClick={toggleMenu} className="text-gray-400 hover:text-black focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <button onClick={() => handleLinkClick('Top Up')} className="block w-full text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium">Top Up</button>
              <hr />
              <button onClick={() => handleLinkClick('Game')} className="block w-full text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium">Game</button>
              <hr />
              <button onClick={() => handleLinkClick('Casino')} className="block w-full text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium">Casino</button>
              <hr />
              <button onClick={() => handleLinkClick('Live Chat')} className="block w-full text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium">Live Chat</button>
              <hr />
              <button onClick={isLoggedIn ? handleLogout : () => handleLinkClick('Login/Logout')} className="block w-full text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium">
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

