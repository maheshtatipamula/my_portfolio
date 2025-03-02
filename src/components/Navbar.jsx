import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-sm py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-secondary font-mono">
          <span className="text-textPrimary">&lt;</span>
          Mahesh
          <span className="text-textPrimary">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "text-secondary" : ""
              }`}
            >
              <span className="text-secondary font-mono mr-1">
                {index + 1}.
              </span>{" "}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textPrimary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-textSecondary"
                }`}
                onClick={closeMenu}
              >
                <span className="text-secondary font-mono mr-1">
                  {index + 1}.
                </span>{" "}
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
// for mobile
// <a
//   href="/resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="btn self-start"
//   onClick={closeMenu}
// >
//   Download CV
// </a>

// laptop
// <a
// href="/resume.pdf"
// target="_blank"
// rel="noopener noreferrer"
// className="btn"
// >
// Download CV
// </a>
