import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { getCurrentYear } from '../../utils/helpers';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="text-white pt-12 pb-6 border-t border-white border-opacity-10 bg-black leaf-footer" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
      <div className="container mx-auto px-4" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
          {/* About section */}
          <div style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
            <h3 className="text-xl font-semibold mb-4 leaf-accent">About</h3>
            <p className="text-white mb-4">
              We are a church that celebrates Christ and cares for community. We love people
              and would want to connect with you at any of our locations or online. It's an
              honour to serve you in any way we can!
            </p>
          </div>

          {/* Follow Us section */}
          <div style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
            <h3 className="text-xl font-semibold mb-4 leaf-accent" style={{ color: 'white' }}>Follow Us</h3>
            <div className="flex space-x-4" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaFacebook size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaTwitter size={30} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaYoutube size={30} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaTiktok size={30} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>

          {/* Head Office section */}
          <div style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
            <h3 className="text-xl font-semibold mb-4 leaf-accent" style={{ color: 'white' }}>Head Office</h3>
            <address className="text-white not-italic">
              Mbale City<br />
              P.O.BOX 123, Mbale<br />
              +256 700 000000<br />
              connect@berakahchurch.com
            </address>
          </div>

          {/* Quick Links section */}
          <div style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
            <h3 className="text-xl font-semibold mb-4 leaf-accent" style={{ color: 'white' }}>Quick Links</h3>
            <ul className="space-y-2 leaf-list" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
              <li style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}><Link to="/locations" className="hover-swell text-white hover:text-blue-300" style={{ color: 'white' }}>Locations</Link></li>
              <li style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}><Link to="/cell-family" className="hover-swell text-white hover:text-blue-300" style={{ color: 'white' }}>Cell Family</Link></li>
              <li style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}><Link to="/now-what" className="hover-swell text-white hover:text-blue-300" style={{ color: 'white' }}>Now What?</Link></li>
              <li style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}><Link to="/serve" className="hover-swell text-white hover:text-blue-300" style={{ color: 'white' }}>Serve</Link></li>
              <li style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}><Link to="/contact" className="hover-swell text-white hover:text-blue-300" style={{ color: 'white' }}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="leaf-divider my-6" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}></div>

        {/* Copyright */}
        <div className="text-center text-white" style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>
          <p style={{ backgroundColor: '#000000', background: '#000000', color: 'white' }}>© {currentYear} - All Rights Are Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
