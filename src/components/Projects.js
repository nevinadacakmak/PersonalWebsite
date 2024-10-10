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
              <h3>AllergenAlert.co ElleHacks (MLH)</h3>
              <p>
                Built a website using HTML, CSS, and JavaScript to identify
                allergen trees based on user location, using government data.
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
              <h3>Univeats: Student Meal Planner App</h3>
              <p>
                Developing a mobile app using React Native and Django, enabling
                university students to plan nutritious meals, integrating
                grocery lists and meal history.
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
              <h3>Trading Algorithm</h3>
              <p>
                Built a C# trading algorithm integrated with a financial trading
                app's database, increasing profitability by 14%.
              </p>
            </div>
          </a>
        </div>

        {/* SwipeShield */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/swipe-shield"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="/swipe_shield_image.png"
                alt="SwipeShield (Hack the Valley) - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>SwipeShield (Hack the Valley)</h3>
              <p>
                Developed an unsupervised machine learning model for passive
                authentication, using K-Means clustering for anomaly detection.
              </p>
            </div>
          </a>
        </div>

        {/* RateMyCourses.com */}
        <div className="project-card">
          <a
            href="https://www.ratemycourses.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-image-wrapper">
              <img
                src="/ratemycourses_image.png"
                alt="RateMyCourses.com - 2024"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>RateMyCourses.com</h3>
              <p>
                Contributing to a web platform for students to rate university
                courses, using React.js and Django for front-end and back-end
                development.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
