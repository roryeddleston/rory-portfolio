import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import "../index.css";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow px-4 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold">
          Rory's Portfolio
        </span>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="transition-colors text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="transition-colors text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="transition-colors text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;