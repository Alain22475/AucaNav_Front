// Contact.js
import React from 'react';
import './styles/Contact.css'; // Importing a CSS file for styling

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-title">Contact Us or Feedback</h1>
    <p11>If you have any questions or need assistance, reach out!</p11>
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="5" required />

      <button type="submit" className="submit-button">Send Message</button>
    </form>
  </div>
);

export default Contact;
