import React, { useEffect, useState } from 'react';
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false); // New state for success message

  const onSubmit = async (event, formData) => {
    event.preventDefault();
    
    const formPayload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: "4e688e61-2e64-4f5d-a014-7e995acaf033"
    };
    
    const json = JSON.stringify(formPayload);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsSuccess(true); // Set success message on successful submission
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      console.error("Error in submission", res);
      setIsSuccess(false); // Set success to false if submission fails
    }
  };

  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    onSubmit(e, formData); // Call the onSubmit function when the form is submitted
  };

  return (
    <div id="contact" className="contact-container">
      {/* Page Title */}
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      {/* Main Content: Split Layout */}
      <div className="contact-content">
        {/* Contact Details Section */}
        <div className="contact-details">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>Feel free to reach out for any inquiries</p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+94 718 814 660</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>pathiranathimesha2021@gmail.com</span>
            </div>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/himeshapathirana"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/himesha-pathirana-aa3659214"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <FaPaperPlane className="submit-icon" />
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {isSuccess && (
            <div className="success-message">
              <p>Message sent successfully! I will get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
