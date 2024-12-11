import React, { useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const projectsRef = useRef(null);  // Create a ref for the projects section

  return (
    <div id="projects" className="projects"> {/* Add id="projects" */}
      <h1 className="projects-title">Projects</h1>
      <div className="project-category-container" ref={projectsRef}>
        {/* Individual Projects */}
        <div className="project-category">
          <h2>Individual Projects</h2>
          <ul>
            <li>Online Food Ordering System | Flutter</li>
            <li>Portfolio App</li>
            <li>Weather API Project</li>
            <li>Social Media App | Flutter</li>
            <li>Myunivers Project | Flutter</li>
            <li>Marreym Project | Flutter</li>
          </ul>
        </div>

        {/* UI/UX Projects */}
        <div className="project-category">
          <h2>UI/UX Projects</h2>
          <ul>
            <li>Online Food Ordering System UI</li>
            <li>Air Ticket Booking Website</li>
            <li>Chat App</li>
            <li>Online Movie tickets booking app</li>
            <li>University App</li>
          </ul>
        </div>

        {/* University Projects */}
        <div className="project-category">
          <h2>University Projects</h2>
          <ul>
            <li>A Brief Study of Harmony Operating System</li>
            <li>Review Paper: Applications of Mathematics in Cryptography</li>
            <li>Implementing a Robust Home-to-LAN Network | An OSI-Based Approach</li>
            <li>Conducting an analysis of Oracle Organisational Structures and procedures</li>
            <li>University mobile App | Flutter</li>
            <li>Employee Management System for Dabzia Clothing Store PHP Laravel | Sql Server | Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
