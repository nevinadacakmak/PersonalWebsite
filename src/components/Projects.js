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
            <div className="project-content">
              <h3>AllergenAlert.co (ElleHacks)</h3>
              <p>
                Developed a website using HTML, CSS, and JavaScript to help
                users identify allergen trees based on their location by
                leveraging government data.
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
            <div className="project-content">
              <h3>Univeats: Student Meal Planner App</h3>
              <p>
                Creating a mobile application with React Native and Django that
                empowers university students to plan nutritious meals, featuring
                grocery lists and meal histories.
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
            <div className="project-content">
              <h3>Automated Trading Algorithm</h3>
              <p>
                Designed a C# trading algorithm integrated with a financial
                trading application, achieving a 14% increase in profitability.
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
            <div className="project-content">
              <h3>SwipeShield (Hack the Valley)</h3>
              <p>
                Developed an unsupervised machine learning model for passive
                authentication, utilizing K-Means clustering for effective
                anomaly detection.
              </p>
            </div>
          </a>
        </div>

        {/* RateMyCourses.org */}
        <div className="project-card">
          <a
            href="https://www.ratemycourses.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <h3>RateMyCourses.org</h3>
              <p>
                Contributing to a web platform that enables students to rate
                university courses, utilizing React.js for front-end and Django
                for back-end development.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
