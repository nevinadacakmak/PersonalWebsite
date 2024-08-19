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
                src="/allergen_alert_image.png"
                alt="AllergenAlert.co ElleHacks (MLH) - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>AllergenAlert.co (ElleHacks) - 2024</h3>
              <p>Identifies allergen trees using Toronto-specific data.</p>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/finance-algorithm"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="/robotti_image.png"
                alt="Software Dev (2023-present)"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Software Dev</h3>
              <h3>(2023-present)</h3>
              <p>
                Developed and improved a trading algorithm for financial markets
                to make real-time trading decisions.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
