import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Sidebar({ setActiveSection }) {
  const [activeButton, setActiveButton] = useState("professional");

  const handleButtonClick = (section) => {
    setActiveButton(section);
    setActiveSection(section);
  };

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
    <div className="sidebar">
      <div className="profile-section">
        <img src="formal_photo.jpg" alt="Profile" className="profile-pic" />
        <div className="toggle-buttons">
          <button
            className={activeButton === "professional" ? "active" : ""}
            onClick={() => handleButtonClick("professional")}
          >
            PROFESSIONAL
          </button>
          <button
            className={activeButton === "personal" ? "active" : ""}
            onClick={() => handleButtonClick("personal")}
          >
            PERSONAL
          </button>
        </div>
      </div>

      <div className="menu">
        {activeButton === "professional" ? (
          <>
            <button onClick={() => scrollToSection("about-professional")}>
              About
            </button>
            <button onClick={() => scrollToSection("experience-professional")}>
              Experience
            </button>
          </>
        ) : (
          <>
            <button onClick={() => scrollToSection("about2-personal")}>
              About
            </button>
            <button onClick={() => scrollToSection("coolStuff-personal")}>
              Cool Stuff
            </button>
            <button onClick={() => scrollToSection("blog-personal")}>
              Blog
            </button>
          </>
        )}
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

export default Sidebar;
