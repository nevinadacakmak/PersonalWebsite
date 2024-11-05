import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">Nevin Ada Çakmak</div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${getLinkClass("/")}`}>
          Home
        </Link>

        <a href="/resume.pdf" className="resume-link">
          Resume
        </a>
      </div>

      <div className="social-media-icons">
        <a
          href="https://www.linkedin.com/in/nevin-ada-cakmak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nevinadacakmak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
