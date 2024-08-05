import React, { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

function Professional() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div id="professional-section">
      <div id="professional-buttons">
        <button onClick={() => setActiveTab("about")}>ABOUT ME</button>
        <button onClick={() => setActiveTab("experience")}>
          MY EXPERIENCES
        </button>
        <button onClick={() => setActiveTab("contact")}>
          CONTACT INFORMATION
        </button>
      </div>
      <div id="professional-content">
        {activeTab === "about" && <About />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default Professional;
