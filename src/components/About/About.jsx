import React from 'react';
import './About.css';
import themePattern from '../../assets/pro (2).webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDocker, 
  faAndroid, 
  faFlutter, 
  faPython, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <div className="typing-text">
            <p>
              I am a versatile software developer specializing in mobile application development, 
              DevOps, and UI/UX design. As a Flutter Developer at DoNext, I focused on creating 
              high-performance mobile applications using Flutter and Dart. My key responsibilities 
              included developing intuitive user interfaces, managing CI/CD pipelines, and 
              collaborating with cross-functional teams to deliver quality software solutions.
            </p>
          </div>
        </div>
        
        <div className="about-right">
          <img 
            src={themePattern} 
            alt="Professional portrait" 
            className="about-img" 
            loading="lazy" 
          />
        </div>
      </div>

      <div className="about-logos">
        <FontAwesomeIcon icon={faFlutter} className="logo" title="Flutter" />
        <FontAwesomeIcon icon={faPython} className="logo" title="Python" />
        <FontAwesomeIcon icon={faAndroid} className="logo" title="Android" />
        <FontAwesomeIcon icon={faDocker} className="logo" title="Docker" />
        <FontAwesomeIcon icon={faGithub} className="logo" title="GitHub" />
      </div>
    </div>
  );
};

export default About;
