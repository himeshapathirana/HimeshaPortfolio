import React from "react";
import "./Hero.css";
import profile_img from '../../assets/profile.jpg';
import resumePDF from '../../assets/Himesha_PathiranaCV .pdf';

const Hero = () => { 
  const handleResumeView = () => {
    // Open the PDF in a new tab
    window.open(resumePDF, '_blank');
  }; 

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Himesha Pathirana" />
      <h1>
        <span>Himesha Pathirana</span>
        <br /> Mobile App Developer | UI/UX Designer | DevOps
      </h1>
      <p>
        My name is Himesha Pathirana, an empathetic and self-motivated young woman who is passionate about continuous learning and self-improvement. 
        I am highly organized, possess a pleasant personality, and have strong interpersonal communication skills. Additionally, I am a skilled presenter. 
        I am always eager to embrace new challenges and opportunities, quickly learning and adapting to new environments. 
        My hobbies include reading books and exploring photography, which help me stay inspired and creative. 
        With a strong foundation in technology and a drive to succeed, my ultimate goal is to utilize my skills and knowledge to achieve a prominent position in the IT field, 
        contributing to organizational success through professional competence and all-around experience. 
        I am committed to making meaningful contributions to the IT industry and continuously expanding my expertise.
      </p>
      <div className="hero-action"> 
      <button 
          className="hero-connect" 
          onClick={scrollToContact}
          style={{ cursor: 'pointer' }}
        >
          Connect Me
        </button>
        <div 
          className="hero-resume" 
          onClick={handleResumeView}
          style={{ cursor: 'pointer' }}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
