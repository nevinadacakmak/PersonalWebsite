import React from "react";
import About from "./About";
import Projects from "./Projects";
import Photo from "./Photo";
import Blog from "./Blog";

const Home = () => {
  return (
    <div id="home">
      <About />
      <Projects />
      <Blog />
      <Photo />
    </div>
  );
};

export default Home;
