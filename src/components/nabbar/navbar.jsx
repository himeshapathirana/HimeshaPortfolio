import React, { useState, useEffect } from "react";
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsive design and menu toggle
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Automatically close menu when switching back to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu on section click
    }
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    scrollToSection(section);
  };

  const NavLinks = () => (
    <>
      <li className={menu === "home" ? "active" : ""}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("home");
          }}
        >
          Home
        </a>
      </li>
      <li className={menu === "about" ? "active" : ""}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("about");
          }}
        >
          About Me
        </a>
      </li>
      <li className={menu === "projects" ? "active" : ""}>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("projects");
          }}
        >
          Projects
        </a>
      </li>
      <li className={menu === "education" ? "active" : ""}>
        <a
          href="#education"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("education");
          }}
        >
          Education
        </a>
      </li>
      <li className={menu === "contact" ? "active" : ""}>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("contact");
          }}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="nav-logo">
        {isMobile && (
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Render menu differently based on screen size */}
      {isMobile ? (
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <NavLinks />
        </ul>
      ) : (
        <ul className="nav-menu">
          <NavLinks />
        </ul>
      )}

      <button
        className="nav-connect"
        onClick={() => scrollToSection("contact")}
      >
        Connect With Me
      </button>
    </div>
  );
};

export default Navbar;