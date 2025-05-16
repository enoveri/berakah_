import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext.jsx';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

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
          Berakah Church
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
          <Link to="/leadership" className="text-gray-700 hover:text-blue-600 font-medium">Leadership</Link>
          <Link to="/locations" className="text-gray-700 hover:text-blue-600 font-medium">Locations</Link>
          <Link to="/cell-family" className="text-gray-700 hover:text-blue-600 font-medium">Cell Family</Link>
          <Link to="/generosity" className="text-gray-700 hover:text-blue-600 font-medium">Generosity</Link>
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
              to="/leadership" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Leadership
            </Link>
            <Link 
              to="/locations" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Locations
            </Link>
            <Link 
              to="/cell-family" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Cell Family
            </Link>
            <Link 
              to="/generosity" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Generosity
            </Link>
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
