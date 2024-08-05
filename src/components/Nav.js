import React, { useState } from "react";

function Nav({ setActiveSection }) {
  const [activeButton, setActiveButton] = useState("professional");

  const handleButtonClick = (section) => {
    setActiveButton(section);
    setActiveSection(section);
  };

  return (
    <div id="nav-buttons">
      <div id="prof-button">
        <button
          className={activeButton === "professional" ? "active" : ""}
          onClick={() => handleButtonClick("professional")}
        >
          PROFESSIONAL
        </button>
      </div>
      <div id="pers-button">
        <button
          className={activeButton === "personal" ? "active" : ""}
          onClick={() => handleButtonClick("personal")}
        >
          PERSONAL
        </button>
      </div>
    </div>
  );
}

export default Nav;
