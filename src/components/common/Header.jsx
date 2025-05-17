import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext.jsx';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  const [showDonateDropdown, setShowDonateDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      {/* Top Bar with Social Media Icons */}
      <div className="hidden md:flex justify-end items-center bg-gray-100 py-2 px-6 space-x-4">
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
          <FaYoutube />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <FaTiktok />
        </a>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          International great faith ministries
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/statement-of-faith" className="text-gray-700 hover:text-blue-600 font-medium">Statement of Faith</Link>
          <Link to="/partners" className="text-gray-700 hover:text-blue-600 font-medium">Partners</Link>
          <Link to="/stories-of-impact" className="text-gray-700 hover:text-blue-600 font-medium">Stories of Impact</Link>

          {/* Donate Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
              onMouseEnter={() => setShowDonateDropdown(true)}
              onClick={() => setShowDonateDropdown(!showDonateDropdown)}
            >
              Donate <FaChevronDown className="ml-1 h-3 w-3" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${
                showDonateDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseLeave={() => setShowDonateDropdown(false)}
            >
              <div className="py-1">
                <Link
                  to="/sponsor-child"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  Sponsor a Child
                </Link>
                <Link
                  to="/ministry-needs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  Ministry Needs
                </Link>
                <Link
                  to="/donate"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDonateDropdown(false)}
                >
                  All Giving Options
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/statement-of-faith"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Statement of Faith
            </Link>
            <Link
              to="/partners"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              to="/stories-of-impact"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Stories of Impact
            </Link>
            {/* Donate Section with Sub-items */}
            <div className="py-2">
              <div className="text-gray-700 font-medium mb-2">Donate</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/sponsor-child"
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Sponsor a Child
                </Link>
                <Link
                  to="/ministry-needs"
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Ministry Needs
                </Link>
                <Link
                  to="/donate"
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  All Giving Options
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex space-x-4 py-2">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
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
