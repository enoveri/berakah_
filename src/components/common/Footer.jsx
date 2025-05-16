import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { getCurrentYear } from '../../utils/helpers';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              We are a church that celebrates Christ and cares for community. We love people
              and would want to connect with you at any of our locations or online. It's an
              honour to serve you in any way we can!
            </p>
          </div>

          {/* Follow Us section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTiktok size={24} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Head Office section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <address className="text-gray-400 not-italic">
              Mbale City<br />
              P.O.BOX 123, Mbale<br />
              +256 700 000000<br />
              connect@berakahchurch.com
            </address>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/locations" className="text-gray-400 hover:text-white">Locations</Link></li>
              <li><Link to="/cell-family" className="text-gray-400 hover:text-white">Cell Family</Link></li>
              <li><Link to="/now-what" className="text-gray-400 hover:text-white">Now What?</Link></li>
              <li><Link to="/serve" className="text-gray-400 hover:text-white">Serve</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>© {currentYear} - All Rights Are Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
