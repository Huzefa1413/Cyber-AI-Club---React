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
            <Link
              className={location.pathname === '/admin/home' ? 'active' : ''}
              to="/admin/home"
            >
              Edit Events
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/admin/team' ? 'active' : ''}
              to="/admin/team"
            >
              Edit Team
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/admin/ads' ? 'active' : ''}
              to="/admin/ads"
            >
              Edit Ads
            </Link>
          </li>
        </ul>
        <Link to="/admin" className="action_btn">
          Logout
        </Link>
        <div className="toggle_btn" onClick={handleToggle}>
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            className={location.pathname === '/admin/home' ? 'active' : ''}
            to="/admin/home"
          >
            Edit Events
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/admin/team' ? 'active' : ''}
            to="/admin/team"
          >
            Edit Team
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/admin/events' ? 'active' : ''}
            to="/admin/events"
          >
            Edit Ads
          </Link>
        </li>
        <li>
          <Link to="/admin" className="action_btn">
            Logout
          </Link>
        </li>
      </div>
    </header>
  );
};

export default Navbar;
