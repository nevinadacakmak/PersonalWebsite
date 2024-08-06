import React, { useState } from "react";
import "./index.css";
import Professional from "./components/Professional";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeSection, setActiveSection] = useState("professional");

  return (
    <div className="App">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">
        {activeSection === "professional" && <Professional />}
        {activeSection === "personal" && <Personal />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
