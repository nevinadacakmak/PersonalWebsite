import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Resume
        </a>
        <p>|</p>
        <a
          href="#content"
          onClick={() => scrollToSection("content")}
          className="content-link"
        >
          Content
        </a>
      </div>

      <div className="social-media-icons">
        <a
          href="https://www.instagram.com/nevinadacakmak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nevin-ada-cakmak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/ADACAKMAKK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
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
