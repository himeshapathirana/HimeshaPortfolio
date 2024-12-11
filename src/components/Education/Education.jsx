import React from "react";
import "./Education.css";
import educationImage from "../../assets/edu.jpg";

const Education = () => {
  return (
    <div id="education" className="education">
      <h1 className="education-title">Education</h1>
      <div className="education-header">
        {/* You can add any other header information if needed */}
      </div>
      <div className="education-section">
        <div className="education-item">
          <h2>BSc (Honours) in Computer Science</h2>
          <h3>NSBM Green University</h3>
          <p>2021 - Present</p>
          <p>
            A comprehensive 4-year degree covering core courses such as programming, data structures, algorithms,
            computer architecture, and operating systems. Specialized courses include AI, machine learning, software
            engineering, database systems, computer networks, and cybersecurity. The program also covers essential
            mathematics and theory, including discrete mathematics, linear algebra, probability, and computational
            theory. Students gain practical experience through labs, projects, and internships. Electives are offered in
            areas like web development, mobile app development, game design, and data science.
          </p>
        </div>

        <div className="education-item">
          <h2>Bachelor of Information Technology (BIT)</h2>
          <h3>University of Colombo</h3>
          <p>2022 - Present</p>
          <p>Currently pursuing the Bachelor of Information Technology (BIT) program at the University of Colombo, specializing in foundational and advanced concepts of IT. The first year includes courses on programming, web technologies, databases, and IT fundamentals, providing a strong base for future specialization and practical applications in the IT industry.</p>
        </div>

        <div className="education-item">
  <h2 className="degree-title">GCE Advanced Level - Physical Science Stream</h2>
  <h3 className="institution-name">Badulla Central College</h3>
  <p className="graduation-year">2020</p>
  
  <div className="subjects">
    <p><strong>Subjects:</strong></p>
    <ul>
      <li><strong>Combined Mathematics:Credit Pass</strong> (C)</li>
      <li><strong>Physics:Ordinary Pass</strong> (S)</li>
      <li><strong>Chemistry:Ordinary Pass</strong> (S)</li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default Education;
