import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { getCurrentYear } from '../../utils/helpers';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="text-white pt-12 pb-6 border-t border-white border-opacity-10 dreamy-bg leaf-footer">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 leaf-accent">About</h3>
            <p className="text-white mb-4">
              We are a church that celebrates Christ and cares for community. We love people
              and would want to connect with you at any of our locations or online. It's an
              honour to serve you in any way we can!
            </p>
          </div>

          {/* Follow Us section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 leaf-accent">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/gidudu" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/paulgidudu" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/igfmuganda" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaInstagram size={30} />
              </a>
              <a href="http://www.youtube.com/user/PaulGidudu" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaYoutube size={30} />
              </a>
              <a href="https://www.linkedin.com/company/international-great-faith-ministries" target="_blank" rel="noopener noreferrer" className="hover-swell text-white hover:text-blue-300">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Head Office section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 leaf-accent">Head Office</h3>
            <address className="text-white not-italic">
              <strong>Uganda Office:</strong><br />
              P.O. BOX 28501, Kampala, Uganda<br />
              Tel: +256 788 365 566 | +256 781 849 038<br />
              +256 770 369 912<br />
              Email: igfm@gidudu.org<br /><br />

              <strong>USA Office:</strong><br />
              P.O. Box 722102, Houston, TX 77272 USA<br />
              Tel: +1 281 617 9943<br />
              Email: igfm@gidudu.org
            </address>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 leaf-accent">Quick Links</h3>
            <ul className="space-y-2 leaf-list">
              <li><Link to="/about" className="hover-swell text-white hover:text-blue-300">About</Link></li>
              <li><Link to="/statement-of-faith" className="hover-swell text-white hover:text-blue-300">Statement of Faith</Link></li>
              <li><Link to="/partners" className="hover-swell text-white hover:text-blue-300">Partners</Link></li>
              <li><Link to="/stories-of-impact" className="hover-swell text-white hover:text-blue-300">Stories of Impact</Link></li>
              <li><Link to="/sponsor-child" className="hover-swell text-white hover:text-blue-300">Sponsor a Child</Link></li>
              <li><Link to="/contact" className="hover-swell text-white hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="leaf-divider my-6"></div>

        {/* Copyright */}
        <div className="text-center text-white">
          <p>© {currentYear} - All Rights Are Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
