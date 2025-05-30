'use client';

import { useState } from "react";




export default function Navbar() {

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

const navStyles = {
    navbar: {
      backgroundColor: '#2c3e50',
      borderBottom: '3px solid #3498db',
      padding: '1rem 0',
      fontFamily: "'Montserrat', sans-serif"
    },
    brand: {
      background: 'linear-gradient(to right, #3498db, #4aa8ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700',
      fontSize: '1.5rem'
    },
    link: {
      color: '#bdc3c7',
      margin: '0 1rem',
      position: 'relative',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    toggler: {
      borderColor: '#3498db',
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(52, 152, 219, 0.3)'
      }
    }
  };

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Collections', href: 'products' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={navStyles.navbar}>
      <div className="container">
        <a 
          className="navbar-brand" 
          onClick={() => handleScroll('home')} 
          style={{ ...navStyles.brand, cursor: 'pointer' }}
        >
          LuxeNex
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={navStyles.toggler}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="nav-link"
                style={{
                  ...navStyles.link,
                  ...(activeSection === item.href && navStyles.activeLink)
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
