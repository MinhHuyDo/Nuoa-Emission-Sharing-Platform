import React, { useState, useEffect, useRef } from 'react';
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '/src/components/searchbar/searchbar.css';
import { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

function Searchbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const searchMenuRef = useRef(null);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleSearchMenuToggle = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsUserMenuOpen(false);
    }
    if (searchMenuRef.current && !searchMenuRef.current.contains(event.target)) {
      setIsSearchMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      window.location.href = '/'; // Redirect to the home page or login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className={`fixed top-0 left-72 right-0 h-20 px-4 flex items-center justify-between bg-white border-b border-gray-200 shadow-lg ${isSearchMenuOpen ? 'z-50' : ''}`}>
      {isSearchMenuOpen && (
        <div className="fixed inset-0 bg-gray-500 opacity-50 z-40"></div>
      )}
      <div className="relative" ref={searchMenuRef}>
        <button
          className="mx-4 w-12 h-12 text-3xl flex justify-center items-center rounded-full hover:bg-gray-200 z-50"
          onClick={handleSearchMenuToggle}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {isSearchMenuOpen && (
          <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="px-4 py-2">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Search..."
              />
            </div>
          </div> 
        )}
      </div>

      <div className="flex space-x-4">
        <button className="w-12 h-12 text-3xl flex justify-center items-center rounded-full hover:bg-gray-200">
          <i className="fa-regular fa-bell"></i>
        </button>

        <div className="relative" ref={userMenuRef}>
          <button
            className="w-12 h-12 text-3xl flex justify-center items-center rounded-full hover:bg-gray-200"
            onClick={handleUserMenuToggle}
          >
            <i className="fa-solid fa-circle-user"></i>
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="px-4 py-2">
                <p className="text-sm font-medium">User Name</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
              <div className="border-t border-gray-200"></div>
              <ul className="py-2">
                <li>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Profile</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Settings</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-200" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
