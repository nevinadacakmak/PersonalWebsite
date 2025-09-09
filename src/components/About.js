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
            I am a Computer Science student at the{" "}
            <a
              href="https://www.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Toronto.
            </a>
            My main interests are data science, machine learning, psychology. If
            I can be helpful or you'd like to chat, please{" "}
            <a href="mailto:nevinada.cakmak@mail.utoronto.ca">reach out.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
