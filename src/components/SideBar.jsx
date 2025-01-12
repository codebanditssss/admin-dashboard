import React from 'react';
import './sideBar.css';
import Logo from './Logo';
import navList from '../data/navItem';
import NavItem from './NavItem';

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
            <a className="nav-link" href="/">
              <i className="bi bi-play-btn"></i>
              <span>Training Modules</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bi bi-list-check"></i>
              <span>Skill Assessment</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bi bi-briefcase"></i>
              <span>Job Matches</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bi bi-file-text"></i>
              <span>My Applications</span>
            </a>
          </li>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">
          {/* Help */}
          <li className="nav-item mt-auto">
            <a className="nav-link" href="#">
              <i className="bi bi-question-circle"></i>
              <span>Help</span>
            </a>
          </li>

          {/* Settings */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default SideBar;
