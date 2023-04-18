import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  const location = useLocation();
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">Cyber AI Club</Link>
        </div>
        <ul className="links">
          <li>
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/team' ? 'active' : ''}
              to="/team"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/events' ? 'active' : ''}
              to="/events"
            >
              Events
            </Link>
          </li>
        </ul>
        <Link to="/joinusform" className="action_btn">
          Join Us Now
        </Link>
        <div className="toggle_btn" onClick={handleToggle}>
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/team' ? 'active' : ''}
            to="/team"
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/events' ? 'active' : ''}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li>
          <Link to="/joinusform" className="action_btn">
            Join Us Now
          </Link>
        </li>
      </div>
    </header>
  );
};

export default Navbar;
