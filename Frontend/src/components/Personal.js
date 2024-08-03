import React, { useState } from "react";
import About2 from "./About2";
import CoolStuff from "./CoolStuff";
import Photos from "./Photos";

function Personal() {
  const [activeTab, setActiveTab] = useState("about2");

  return (
    <div id="personal-section">
      <div id="personal-buttons">
        <button onClick={() => setActiveTab("about2")}>ABOUT ME</button>
        <button onClick={() => setActiveTab("coolStuff")}>COOL STUFF</button>
        <button onClick={() => setActiveTab("photos")}>
          PHOTOS AND VIDEOS
        </button>
      </div>
      <div id="personal-content">
        {activeTab === "about2" && <About2 />}
        {activeTab === "coolStuff" && <CoolStuff />}
        {activeTab === "photos" && <Photos />}
      </div>
    </div>
  );
}

export default Personal;
