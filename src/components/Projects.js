import React from "react";

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/allergen-alert"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="allergen_alert_image.jpg"
                alt="AllergenAlert.co (ElleHacks) - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>AllergenAlert.co (ElleHacks) - 2024</h3>
              <p>Identifies allergen trees using Toronto-specific data.</p>
            </div>
          </a>
        </div>
        {/* You can add more project cards here */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/allergen-alert"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="allergen_alert_image.jpg"
                alt="AllergenAlert.co (ElleHacks) - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>AllergenAlert.co (ElleHacks) - 2024</h3>
              <p>Identifies allergen trees using Toronto-specific data.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
