import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">Nevin Ada Çakmak</div>
      <div className="nav-links">
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
