import React from "react";

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {/* AllergenAlert.co */}
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
              <h3>AllergenAlert.co ElleHacks (MLH) - 2024</h3>
              <p>
                Developed a website that identifies allergen trees using
                Toronto-specific data and user location.
              </p>
            </div>
          </a>
        </div>

        {/* Student Meal Planner App */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/student-meal-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="/meal_planner_image.png"
                alt="Student Meal Planner App - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Student Meal Planner App - 2024</h3>
              <p>
                Developing a React Native app to help students plan nutritious
                meals based on their preferences and budget.
              </p>
            </div>
          </a>
        </div>

        {/* Trading Algorithm */}
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
                alt="Trading Algorithm - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Trading Algorithm - 2024</h3>
              <p>
                Built a C# trading algorithm for BIST100, enhancing trading
                efficiency and profitability by 14%.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
