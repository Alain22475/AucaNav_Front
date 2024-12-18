// src/pages/Services.js
import React from 'react';
import '../components/styles/StudentServices.css'; // Import your CSS for styling

const Services = () => (
  <div className="page-container">
    <h5>Services</h5>
    <h2>Available Services</h2>
    <ul className="service-list">
      <li>
        <strong className="health-title">Health Services:</strong> 
        We provide healthcare services for our community while inside school to help them achieve their academic goals in a healthy way.
        <br />
        Contact us: 
        <span className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 
            <strong className="health-phone">0788111222</strong> or email us on:
          </span>  
          <a href="mailto:health@auca.ac.rw" className="email">
            <i className="fas fa-envelope"></i> 
            <strong className="health-email">health@auca.ac.rw</strong>
          </a>
        </span>
      </li>
      <li>
        <strong className="evangelism-title">Evangelism Services:</strong> 
        We provide evangelism services for our community while inside and outside school to help them connect with God in order to live a fruitful life.
        <br />
        Contact us: 
        <span className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 
            <strong className="evangelism-phone">0788111222</strong> or email us on: 
          </span>  
          <a href="mailto:evangelism@auca.ac.rw" className="email">
            <i className="fas fa-envelope"></i> 
            <strong className="evangelism-email">evangelism@auca.ac.rw</strong>
          </a>
        </span>
      </li>
      <li>
        <strong className="therapist-title">Therapist Services:</strong> 
        Our therapist services offer counseling and mental health support for students. Whether you're facing academic pressure or personal challenges, we are here to listen and help.
        <br />
        Contact us: 
        <span className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 
            <strong className="therapist-phone">0788111222</strong> or email us on: 
          </span>  
          <a href="mailto:therapist@auca.ac.rw" className="email">
            <i className="fas fa-envelope"></i> 
            <strong className="therapist-email">therapist@auca.ac.rw</strong>
          </a>
        </span>
      </li>
      <li>
        <strong className="social-title">Social Services:</strong> 
        Our social services team is dedicated to promoting community engagement and support for students. We organize various social activities to foster connection and belonging.
        <br />
        Contact us: 
        <span className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 
            <strong className="social-phone">0788111222</strong> or email us on: 
          </span>  
          <a href="mailto:social@auca.ac.rw" className="email">
            <i className="fas fa-envelope"></i> 
            <strong className="social-email">social@auca.ac.rw</strong>
          </a>
        </span>
      </li>
      <li>
        <strong className="mortgage-title">Mortgage Services:</strong> 
        We provide guidance on mortgage options for students and staff who are looking to invest in housing. Our team can assist with applications and financial advice.
        <br />
        Contact us: 
        <span className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 
            <strong className="mortgage-phone">0788111222</strong> or email us on: 
          </span>  
          <a href="mailto:mortgage@auca.ac.rw" className="email">
            <i className="fas fa-envelope"></i> 
            <strong className="mortgage-email">mortgage@auca.ac.rw</strong>
          </a>
        </span>
      </li>
    </ul>
  </div>
);

export default Services;
