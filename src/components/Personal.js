import React, { useState } from "react";
import About2 from "./About2";
import CoolStuff from "./CoolStuff";
import Blog from "./Blog";
import Contact2 from "./Contact2";

function Personal() {
  const [activeTab, setActiveTab] = useState("about2");

  return (
    <div id="personal-section">
      <div id="personal-buttons">
        <button onClick={() => setActiveTab("about2")}>ABOUT ME</button>
        <button onClick={() => setActiveTab("coolStuff")}>COOL STUFF</button>
        <button onClick={() => setActiveTab("blog")}>BLOG</button>
        <button onClick={() => setActiveTab("contact2")}>
          CONTACT INFORMATION
        </button>
      </div>
      <div id="personal-content">
        {activeTab === "about2" && <About2 />}
        {activeTab === "coolStuff" && <CoolStuff />}
        {activeTab === "blog" && <Blog />}
        {activeTab === "contact2" && <Contact2 />}
      </div>
    </div>
  );
}

export default Personal;
