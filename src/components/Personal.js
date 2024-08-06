import React from "react";
import About2 from "./About2";
import CoolStuff from "./CoolStuff";
import Blog from "./Blog";

function Personal() {
  return (
    <div id="personal-section">
      <section id="about2-personal">
        <About2 />
      </section>
      <section id="coolStuff-personal">
        <CoolStuff />
      </section>
      <section id="blog-personal">
        <Blog />
      </section>
    </div>
  );
}

export default Personal;
