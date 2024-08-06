import React from "react";
import "./index.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <About />
        <Projects />
        <Photo />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
