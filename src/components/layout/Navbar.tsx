import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  // Tracks whether the mobile menu is open.
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggles the mobile menu open/closed.
  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Closes the menu when a navigation item is clicked.
  const handleNavClick = (): void => {
    setIsOpen(false);
  };

  // Helper to apply active class for NavLink.
  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `navbar-link${isActive ? ' active' : ''}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `navbar-mobile-link${isActive ? ' active' : ''}`;

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Neon logo - simple text logo for indie dev brand */}
        <Link to="/" className="navbar-logo" onClick={handleNavClick}>
          <span className="logo-mark" />
          <span className="logo-text">Yoichi‑HQ</span>
        </Link>

        {/* Desktop navigation links */}
        <nav className="navbar-links">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            Features
          </NavLink>
          <NavLink
            to="/work-with-me"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            Work With Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            About
          </NavLink>

          {/* Added Contact link (desktop) */}
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className={`navbar-burger ${isOpen ? 'navbar-burger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className="burger-line line-1" />
          <span className="burger-line line-2" />
          <span className="burger-line line-3" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`navbar-mobile-menu ${
          isOpen ? 'menu-open' : 'menu-closed'
        }`}
      >
        <nav className="navbar-mobile-links">
          <NavLink
            to="/"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            Features
          </NavLink>
          <NavLink
            to="/work-with-me"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            Work With Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            About
          </NavLink>

          {/* Added Contact link (mobile) */}
          <NavLink
            to="/contact"
            className={mobileNavLinkClass}
            onClick={handleNavClick}
          >
            Contact
          </NavLink>

          <NavLink
            to="/get-started"
            className={({ isActive }) =>
              `${mobileNavLinkClass({ isActive })} accent-link`
            }
            onClick={handleNavClick}
          >
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;