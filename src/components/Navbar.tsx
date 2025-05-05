import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiFolder,
  FiMail,
  FiLinkedin,
  FiFileText,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import '../index.css';

const navLinks = [
  { to: '/', label: 'Home', icon: <FiHome /> },
  { to: '/projects', label: 'Projects', icon: <FiFolder /> },
  { to: '/contact', label: 'Contact', icon: <FiMail /> },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-20 bg-surface border-r border-border flex-col items-center pt-6 z-50 transition-colors space-y-6">

        <nav className="flex flex-col items-center space-y-8 mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`group relative text-xl text-subtext hover:text-accent transition-colors ${
                pathname === link.to ? 'text-accent' : ''
              }`}
            >
              {link.icon}
              <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-bg text-text text-sm px-2 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/rory-eddleston-5a5001a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-xl text-subtext hover:text-accent transition-colors"
          >
            <FiLinkedin />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-bg text-text text-sm px-2 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              LinkedIn
            </span>
          </a>
          <a
            href="/Rory Eddleston CV v1.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-xl text-subtext hover:text-accent transition-colors"
          >
            <FiFileText />
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-bg text-text text-sm px-2 py-1 rounded-md shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              View CV
            </span>
          </a>
        </nav>

        <div className="mt-auto pb-4">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Hamburger Toggle */}
      <div className="fixed top-4 left-4 z-[100] md:hidden">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="bg-surface text-accent p-4 rounded-full shadow-lg focus:outline-none transition-all"
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            <FiMenu
              className={`absolute transition-opacity transform duration-300 ${
                mobileOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
              size={30}
            />
            <FiX
              className={`absolute transition-opacity transform duration-300 ${
                mobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              size={30}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-surface text-text z-50 flex flex-col items-center justify-center space-y-8 px-6 md:hidden"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-semibold hover:text-accent transition-colors ${
                  pathname === link.to ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://www.linkedin.com/in/rory-eddleston-5a5001a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold hover:text-accent transition-colors"
            >
              View CV
            </a>

            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;