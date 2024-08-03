import React, { useState } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Professional from "./components/Professional";
import Personal from "./components/Personal";

function App() {
  const [activeSection, setActiveSection] = useState("professional");

  return (
    <div className="App">
      <Nav setActiveSection={setActiveSection} />
      <div className="content">
        {activeSection === "professional" && <Professional />}
        {activeSection === "personal" && <Personal />}
      </div>
    </div>
  );
}

export default App;
