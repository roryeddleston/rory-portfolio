import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">Rory's Portfolio</span>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Home</Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Projects</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;