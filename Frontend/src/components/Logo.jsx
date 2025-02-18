import React from 'react';
import './logo.css';

import logoImage from '../images/logo.jpg';

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="#" className="logo d-flex align-items-center">
        <img src={logoImage} alt="Logo" className="logo-img" />
        <span className="d-none d-lg-block">SkillSync</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn close-to-logo"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default Logo;
