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

          {/* Documents */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#documents-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-play-btn"></i>
              <span>Training Modules</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="documents-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-compass"></i>
                  <span>Career Exploration</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-file-earmark-text"></i>
                  <span>Cover Letter Building</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-lightbulb"></i>
                  <span>Job Search Strategies</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Forms */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-list-check"></i>
              <span>Skill Assessment</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-file-earmark"></i>
                  <span>Skill Assessment Form</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-file-earmark"></i>
                  <span>Soft Skills Assessment Form</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-file-earmark"></i>
                  <span>Job Readiness Assessment</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Tables */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-briefcase"></i>
              <span>Job Matches</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-check2-circle"></i>
                  <span>Skill Match</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-sliders"></i>
                  <span>Preference Match</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-person-check"></i>
                  <span>Experience & Education Match</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Charts */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-file-text"></i>
              <span>My Applications</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-clipboard-check"></i>
                  <span>Application Tracker</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-clock-history"></i>
                  <span>Application History</span>
                </a>
              </li>
            </ul>
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
