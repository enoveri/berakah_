import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaVideo,
  FaHeart,
  FaEnvelope,
  FaPrayingHands,
  FaChurch,
  FaUsers,
  FaChild,
  FaHandHoldingHeart
} from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext.jsx';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    ministries: false,
    donate: false
  });

  // Get current location
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => {
    // Remove the hash and get the path
    const currentPath = location.pathname.replace('#', '');
    // For the home page
    if (path === '/' && currentPath === '/') {
      return true;
    }
    // For other pages
    return path !== '/' && currentPath.startsWith(path);
  };

  // Handle scroll event to add shadow and shrink header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
        document.body.classList.add('has-sticky-header');
      } else {
        setScrolled(false);
        document.body.classList.remove('has-sticky-header');
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('has-sticky-header');
    };
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <header className={`watoto-navbar ${scrolled ? 'header-shadow' : ''}`}>
      <div className="watoto-container">
        {/* Logo */}
        <div className="watoto-logo-container">
          <Link to="/">
            <img
              src="./photos/Gidudu.org_logo.png"
              alt="International Great Faith Ministries"
              className={`watoto-logo ${scrolled ? 'shrink' : ''}`}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="watoto-mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="watoto-nav-container">
          <div className="watoto-nav-items">
            <Link to="/" className={`watoto-nav-item ${isActive('/') ? 'active' : ''}`}>
              HOME
            </Link>

            <Link to="/about" className={`watoto-nav-item ${isActive('/about') ? 'active' : ''}`}>
              ABOUT
            </Link>

            <Link to="/statement-of-faith" className={`watoto-nav-item ${isActive('/statement-of-faith') ? 'active' : ''}`}>
              STATEMENT OF FAITH
            </Link>

            {/* Ministries Dropdown */}
            <div className="watoto-dropdown">
              <div className={`watoto-nav-item ${isActive('/choir') || isActive('/pastors-network') || isActive('/church-planting') || isActive('/widows-elderly-care') || isActive('/childrens-church') ? 'active' : ''}`}>
                MINISTRIES <FaChevronDown className="dropdown-arrow" />
              </div>
              <div className="watoto-dropdown-content">
                <Link to="/choir" className={`watoto-dropdown-item ${isActive('/choir') ? 'active' : ''}`}>
                  BERAKHAH CHOIR
                </Link>
                <Link to="/pastors-network" className={`watoto-dropdown-item ${isActive('/pastors-network') ? 'active' : ''}`}>
                  PASTORS NETWORK
                </Link>
                <Link to="/church-planting" className={`watoto-dropdown-item ${isActive('/church-planting') ? 'active' : ''}`}>
                  CHURCH PLANTING
                </Link>
                <Link to="/widows-elderly-care" className={`watoto-dropdown-item ${isActive('/widows-elderly-care') ? 'active' : ''}`}>
                  WIDOWS & ELDERLY CARE
                </Link>
                <Link to="/childrens-church" className={`watoto-dropdown-item ${isActive('/childrens-church') ? 'active' : ''}`}>
                  CHILDREN'S CHURCH
                </Link>
              </div>
            </div>

            <Link to="/partners" className={`watoto-nav-item ${isActive('/partners') ? 'active' : ''}`}>
              PARTNERS
            </Link>

            <Link to="/stories-of-impact" className={`watoto-nav-item ${isActive('/stories-of-impact') ? 'active' : ''}`}>
              STORIES OF IMPACT
            </Link>

            {/* Donate Dropdown */}
            <div className="watoto-dropdown">
              <div className={`watoto-nav-item ${isActive('/sponsor-child') || isActive('/ministry-needs') || isActive('/donate') ? 'active' : ''}`}>
                DONATE <FaChevronDown className="dropdown-arrow" />
              </div>
              <div className="watoto-dropdown-content">
                <Link to="/sponsor-child" className={`watoto-dropdown-item ${isActive('/sponsor-child') ? 'active' : ''}`}>
                  SPONSOR A CHILD
                </Link>
                <Link to="/ministry-needs" className={`watoto-dropdown-item ${isActive('/ministry-needs') ? 'active' : ''}`}>
                  MINISTRY NEEDS
                </Link>
                <Link to="/donate" className={`watoto-dropdown-item ${isActive('/donate') ? 'active' : ''}`}>
                  ALL GIVING OPTIONS
                </Link>
              </div>
            </div>

            <Link to="/prayer-requests" className={`watoto-nav-item ${isActive('/prayer-requests') ? 'active' : ''}`}>
              PRAYER
            </Link>

            <Link to="/teaching-series" className={`watoto-nav-item ${isActive('/teaching-series') ? 'active' : ''}`}>
              TEACHING
            </Link>

            <Link to="/contact" className={`watoto-nav-item ${isActive('/contact') ? 'active' : ''}`}>
              CONTACT
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="watoto-mobile-menu">
          <Link to="/" className={`watoto-mobile-nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            HOME
          </Link>

          <Link to="/about" className={`watoto-mobile-nav-item ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            ABOUT
          </Link>

          <Link to="/statement-of-faith" className={`watoto-mobile-nav-item ${isActive('/statement-of-faith') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            STATEMENT OF FAITH
          </Link>

          {/* Ministries Dropdown */}
          <div className="watoto-mobile-dropdown">
            <div
              className={`watoto-mobile-dropdown-header ${isActive('/choir') || isActive('/pastors-network') || isActive('/church-planting') || isActive('/widows-elderly-care') || isActive('/childrens-church') ? 'active' : ''}`}
              onClick={() => toggleMobileDropdown('ministries')}
            >
              <span>MINISTRIES</span>
              <FaChevronDown className={`${openDropdowns.ministries ? 'rotate-180' : ''}`} />
            </div>
            <div className={`watoto-mobile-dropdown-content ${openDropdowns.ministries ? 'open' : ''}`}>
              <Link to="/choir" className={`watoto-mobile-nav-item ${isActive('/choir') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                BERAKHAH CHOIR
              </Link>
              <Link to="/pastors-network" className={`watoto-mobile-nav-item ${isActive('/pastors-network') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                PASTORS NETWORK
              </Link>
              <Link to="/church-planting" className={`watoto-mobile-nav-item ${isActive('/church-planting') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                CHURCH PLANTING
              </Link>
              <Link to="/widows-elderly-care" className={`watoto-mobile-nav-item ${isActive('/widows-elderly-care') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                WIDOWS & ELDERLY CARE
              </Link>
              <Link to="/childrens-church" className={`watoto-mobile-nav-item ${isActive('/childrens-church') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                CHILDREN'S CHURCH
              </Link>
            </div>
          </div>

          <Link to="/partners" className={`watoto-mobile-nav-item ${isActive('/partners') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            PARTNERS
          </Link>

          <Link to="/stories-of-impact" className={`watoto-mobile-nav-item ${isActive('/stories-of-impact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            STORIES OF IMPACT
          </Link>

          {/* Donate Dropdown */}
          <div className="watoto-mobile-dropdown">
            <div
              className={`watoto-mobile-dropdown-header ${isActive('/sponsor-child') || isActive('/ministry-needs') || isActive('/donate') ? 'active' : ''}`}
              onClick={() => toggleMobileDropdown('donate')}
            >
              <span>DONATE</span>
              <FaChevronDown className={`${openDropdowns.donate ? 'rotate-180' : ''}`} />
            </div>
            <div className={`watoto-mobile-dropdown-content ${openDropdowns.donate ? 'open' : ''}`}>
              <Link to="/sponsor-child" className={`watoto-mobile-nav-item ${isActive('/sponsor-child') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                SPONSOR A CHILD
              </Link>
              <Link to="/ministry-needs" className={`watoto-mobile-nav-item ${isActive('/ministry-needs') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                MINISTRY NEEDS
              </Link>
              <Link to="/donate" className={`watoto-mobile-nav-item ${isActive('/donate') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                ALL GIVING OPTIONS
              </Link>
            </div>
          </div>

          <Link to="/prayer-requests" className={`watoto-mobile-nav-item ${isActive('/prayer-requests') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            PRAYER
          </Link>

          <Link to="/teaching-series" className={`watoto-mobile-nav-item ${isActive('/teaching-series') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            TEACHING
          </Link>

          <Link to="/contact" className={`watoto-mobile-nav-item ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
