import React from 'react';
import './styles/About.css'; // Ensure the CSS has styles for new elements
import { FaFilePdf } from 'react-icons/fa'; // Install react-icons using npm if needed

const policies = [
  { title: 'Code of Conduct', url: '/documents/CodeofConduct.pdf' },
  { title: 'Academic Regulations Policy', url: '/documents/Academic Regulations.pdf' },
  { title: 'Admission Policy', url: '/documents/Admission Policy.pdf' },
  { title: 'Orientation Policy', url: '/documents/AUCA Orientation Policy.pdf' },
  { title: 'Code of Conduct', url: '/documents/CodeofConduct.pdf' },
  { title: 'Academic Regulations Policy', url: '/documents/Academic Regulations.pdf' },
  { title: 'Admission Policy', url: '/documents/Admission Policy.pdf' },
  { title: 'Orientation Policy', url: '/documents/AUCA Orientation Policy.pdf' },
  { title: 'Code of Conduct', url: '/documents/CodeofConduct.pdf' },
  { title: 'Academic Regulations Policy', url: '/documents/Academic Regulations.pdf' },
  { title: 'Admission Policy', url: '/documents/Admission Policy.pdf' },
  { title: 'Orientation Policy', url: '/documents/AUCA Orientation Policy.pdf' },
  { title: 'Code of Conduct', url: '/documents/CodeofConduct.pdf' },
  { title: 'Academic Regulations Policy', url: '/documents/Academic Regulations.pdf' },
  { title: 'Admission Policy', url: '/documents/Admission Policy.pdf' },
  { title: 'Orientation Policy', url: '/documents/AUCA Orientation Policy.pdf' },
];

const About = () => (
  <div className="about-container">
    <h2>About Adventist University of Central Africa</h2>
    <p>
      Adventist University of Central Africa (AUCA) is a private institution of higher learning located in Rwanda.
      Established in 2001, the university aims to provide quality education and foster spiritual growth among students.
    </p>

    <h3>Mission</h3>
    <p>
      The mission of AUCA is to educate and empower students to become leaders who can positively influence their
      communities through knowledge, skills, and values grounded in a Christian worldview.
    </p>

    <h3>Campus Life</h3>
    <p>
      Students at AUCA are encouraged to participate in various extracurricular activities, including sports, clubs, and
      community service initiatives, enhancing their overall university experience.
    </p>

    <h3>AUCA Policies</h3>
    <div className="document-list">
      {policies.map((doc, index) => (
        <div className="document-item" key={index}>
          <FaFilePdf className="pdf-icon" />
          <a href={doc.url} target="_blank" rel="noopener noreferrer">
            {doc.title}
          </a>
        </div>
      ))}
    </div>

    <h3>Contact Information</h3>
    <p>Email: <a href="mailto:info@auca.edu.rw">info@auca.edu.rw</a></p>
    <p>Phone: +250 788 123 456</p>
  </div>
);

export default About;
