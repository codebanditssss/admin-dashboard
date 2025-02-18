import React from 'react';
import './sideBar.css';
import Logo from './Logo';
import navList from '../data/navItem';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      {/* Logo Section */}
      <div className="skill-sync">
        <Logo />
      </div>

      {/* Navigation Menu */}
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Top Section */}
        <div className="sidebar-top">
          {/* Dashboard */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bi bi-house-door"></i>
              <span>Overview</span>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/training" className="nav-link">
              <i className="bi bi-play-btn"></i>
              <span>Training Modules</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assessment" className="nav-link">
              <i className="bi bi-list-check"></i>
              <span>Skill Assessment</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              <i className="bi bi-briefcase"></i>
              <span>Job Matches</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/applications" className="nav-link">
              <i className="bi bi-file-text"></i>
              <span>My Applications</span>
            </Link>
          </li>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">
          {/* Help */}
          <li className="nav-item mt-auto">
            <Link to="/help" className="nav-link">
              <i className="bi bi-question-circle"></i>
              <span>Help</span>
            </Link>
          </li>

          {/* Settings */}
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </Link>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default SideBar;
