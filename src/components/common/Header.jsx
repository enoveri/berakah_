import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext.jsx';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  const [showDonateDropdown, setShowDonateDropdown] = useState(false);

  return (
    <header className="navbar shadow-md w-full border-b border-gray-200 bg-white">
      {/* Social Media Icons moved to the top right corner */}
      <div className="hidden md:flex justify-end items-center py-1 px-6 space-x-4 bg-white">
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
          <FaYoutube />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
          <FaTiktok />
        </a>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/photos/Gidudu.org_logo.png"
            alt="International great faith ministries"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-black hover:text-blue-600 font-medium leaf-nav-item">Home</Link>
          <Link to="/about" className="text-black hover:text-blue-600 font-medium leaf-nav-item">About</Link>
          <Link to="/statement-of-faith" className="text-black hover:text-blue-600 font-medium leaf-nav-item">Statement of Faith</Link>
          <Link to="/partners" className="text-black hover:text-blue-600 font-medium leaf-nav-item">Partners</Link>
          <Link to="/stories-of-impact" className="text-black hover:text-blue-600 font-medium leaf-nav-item">Stories of Impact</Link>

          {/* Donate Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-black hover:text-blue-600 font-medium leaf-nav-item"
              onMouseEnter={() => setShowDonateDropdown(true)}
              onClick={() => setShowDonateDropdown(!showDonateDropdown)}
            >
              Donate <FaChevronDown className="ml-1 h-3 w-3" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 bg-white ${
                showDonateDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseLeave={() => setShowDonateDropdown(false)}
            >
              <div className="py-1">
                <Link
                  to="/sponsor-child"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  Sponsor a Child
                </Link>
                <Link
                  to="/ministry-needs"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  Ministry Needs
                </Link>
                <Link
                  to="/donate"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  All Giving Options
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-black hover:text-blue-600 font-medium leaf-nav-item">Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 shadow-lg absolute w-full z-10 bg-white">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/statement-of-faith"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Statement of Faith
            </Link>
            <Link
              to="/partners"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              to="/stories-of-impact"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Stories of Impact
            </Link>
            {/* Donate Section with Sub-items */}
            <div className="py-2">
              <div className="text-black font-medium mb-2">Donate</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/sponsor-child"
                  className="block text-black hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Sponsor a Child
                </Link>
                <Link
                  to="/ministry-needs"
                  className="block text-black hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Ministry Needs
                </Link>
                <Link
                  to="/donate"
                  className="block text-black hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  All Giving Options
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-black hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex space-x-4 py-2">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
                <FaTiktok />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
