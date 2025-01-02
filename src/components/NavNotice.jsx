import React from 'react';

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-briefcase text-warning"></i>
          <div>
            <h4>New Job Alert</h4>
            <p>A Software Developer position is available at TechCorp.</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-clock-history text-danger"></i>
          <div>
            <h4>Application Deadline</h4>
            <p>The deadline to apply for the Data Analyst position at DataSolutions is today at 11:59 PM.</p>
            <p>1 hr. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Interview Scheduled</h4>
            <p>Your interview with InnovateTech is scheduled for tomorrow at 10:00 AM.</p>
            <p>2 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Resume Feedback</h4>
            <p>Your resume has been reviewed, and suggestions have been shared in your profile.</p>
            <p>4 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
