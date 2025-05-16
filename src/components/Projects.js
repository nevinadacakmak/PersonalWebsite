import React from "react";

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {/* EduBridge - GenAI Genesis Hackathon */}
        <div className="project-card">
          <a
            href="https://github.com/AxisShine/GenAI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <h3>EduBridge (GenAI Genesis Hackathon)</h3>
              <p>
                Built an AI-powered education tool for students with learning
                disabilities and neurodivergence.
              </p>
            </div>
          </a>
        </div>

        {/* System Monitoring Tools */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/c-linux"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <h3>System Monitoring Tools</h3>
              <p>
                Developed Linux command-line tools in C to visualize /proc
                system info. Added process handling, pipes, signals, and
                real-time outputs for CPU/memory metrics.
              </p>
            </div>
          </a>
        </div>

        {/* Assembly Game */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/b58-assemblygame"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <h3>Assembly Game</h3>
              <p>
                Created a 2D drawing game in MIPS Assembly with movement,
                scoring, challenges, and drawing-based accuracy detection. Used
                bitmap display for real-time game graphics and logic.
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
                Built a passive biometric authentication tool. Implemented{" "}
                <strong>K-Means clustering</strong> for anomaly detection.
                Visualized data with Android Debug Bridge and Streamlit.
              </p>
            </div>
          </a>
        </div>

        {/* Automated Trading Program */}
        <div className="project-card">
          <a
            href="https://github.com/nevinadacakmak/finance-algorithm"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <h3>Automated Trading Program</h3>
              <p>
                Built a proprietary <strong>C# trading algorithm</strong>{" "}
                integrated with a stock trading platform. Targeted BIST100 index
                investors, using real-time financial data.
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
                Leading the development to a web platform that enables students
                to rate university courses.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
