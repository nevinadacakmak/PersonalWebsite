import React from "react";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="formal_photo.jpg" alt="Profile" className="photo" />
        </div>
        <div className="bio-container">
          <h1>Hey, I'm Ada!</h1>
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
            fields, with over eight years of experience &amp; volunteering in
            robotics programs. If I can be helpful or you'd like to chat, please
            reach out to{" "}
            <a href="mailto:nevinada.cakmak@mail.utoronto.ca">
              nevinada.cakmak@mail.utoronto.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
