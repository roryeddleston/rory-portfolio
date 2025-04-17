import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="text-theme shadow px-4 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold">Rory Eddleston</span>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-theme hover-accent transition">
            Home
          </Link>
          <Link to="/projects" className="text-theme hover-accent transition">
            Projects
          </Link>
          <Link to="/contact" className="text-theme hover-accent transition">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;