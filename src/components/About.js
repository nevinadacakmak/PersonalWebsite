import React from "react";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="formal_photo.jpg" alt="Profile" className="photo" />
        </div>
        <div className="bio-container">
          <h1>Hi there, I am Ada!</h1>
          <h3>About Me</h3>
          <p>
            I am a second-year Computer Science student at the{" "}
            <a
              href="https://www.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Toronto
            </a>
            . My passion lies in the intersection of technology and human
            learning, and I am committed to promoting gender equality in STEM
            fields, with over seven years of experience & volunteering in
            robotics programs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
