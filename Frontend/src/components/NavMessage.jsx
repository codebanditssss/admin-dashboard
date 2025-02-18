import React from 'react';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new job-related messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt="Company Logo"
              className="rounded-circle"
            />
            <div>
              <h4>Google Careers</h4>
              <p>
                Your application for the Software Engineer Intern role has been reviewed.
              </p>
              <p>2 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt="Company Logo"
              className="rounded-circle"
            />
            <div>
              <h4>Amazon Jobs</h4>
              <p>
                A new job opening for Data Analyst Intern is available. Apply now!
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-3.jpg"
              alt="Company Logo"
              className="rounded-circle"
            />
            <div>
              <h4>LinkedIn Notifications</h4>
              <p>
                Recruiters viewed your profile for the Full-Stack Developer Intern role.
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
