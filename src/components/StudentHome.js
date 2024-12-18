// src/pages/Home.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import '../components/styles/StudentHome.css';
import ChancellorImage from '../images/auca leaders/Chancellor.png';
import IT from '../images/auca leaders/Dean IT.png';
import Academics from '../images/auca leaders/leader_academics.png';
import Registrar from '../images/auca leaders/Registrar.png';
import No_Photo from '../images/auca leaders/unknown_man.png';
import HR from '../images/auca leaders/Human Resources.png';
import Industry from '../images/auca leaders/Industry Development Leader.png';
import Student from '../images/auca leaders/Student Service Director.jpg';
import Education from '../images/auca leaders/Education.jpg';
import Nursing from '../images/auca leaders/Ngoma Dean.jpg';

// Board Members Data
const boardMembers = [
  { name: "Prof Kelvin Onongha", position: "Chancellor", image: ChancellorImage },
  { name: "PhD, Theogene Niyonzima", position: "Deputy Vice Chancellor for Academics", image: Academics },
  { name: "Mrs. Mboyo Sylvie", position: "Director of Academic Records & Registrar", image: Registrar },
  { name: "PhD, Okiko Lynet", position: "Human Resources Manager", image: HR },
  { name: "Mr. Niyomugaba Etienne", position: "Business Manager", image: No_Photo },
  { name: "Assoc. Prof Kayigema Jacques", position: "Director of Research & Publications and Language Center", image: No_Photo },
  { name: "PhD, Gisanabagabo Sebuhuzu", position: "Director, Industry Development & Consultancy", image: Industry },
  { name: "DMin, Aimable Niyobuhungiro", position: "Director of Students Services", image: Student },
  { name: "Dr. Sebagenzi Jason", position: "Dean of Information Technology Faculty", image: IT },
  { name: "Prof Butera Edison", position: "Dean of Business Administration Faculty", image: No_Photo },
  { name: "PhD, Ndagijimana Amon", position: "Dean of Theology & Education Faculty", image: Education },
  { name: "Mr. Samson Kipkosgei Cheruiyot", position: "Director of Ngoma Campus & Dean of Nursing", image: Nursing },
];

const Home = () => (
  <div className="page-container">
    <h5>Welcome to the Adventist University of Central Africa</h5>
    <h2>Background</h2>
    <p3>
      The Adventist University of Central Africa (AUCA) was founded in 1978. The official opening took place on 15 October 1984, and the university received its definitive operating license via law n0 0056/05 of 3rd February 1988, granting AUCA legal personality as a nonprofit-making association.
    </p3>
    <ul>
      <li>Faculty of Business Administration: Departments of Accounting, Finance, and Marketing</li>
      <li>Faculty of Sciences: Departments of Maths-Physics, Biology, and Chemistry, Human Biology, and Public Health</li>
      <li>Faculty of Education: Department of Educational Psychology</li>
      <li>Faculty of Technology: Departments of Information Management, Software Engineering, and Networking</li>
      <li>Faculty of Languages: Department of French and English</li>
      <li>Faculty of Agriculture</li>
      <li>Faculty of Theology</li>
    </ul>

    <h2>School Leaders - Board Members</h2>
    <div className="board-grid">
      {boardMembers.map((member, index) => (
        <div key={index} className="board-member">
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.position}</p>
        </div>
      ))}
    </div>

    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ marginRight: '10px', color: '#4267B2' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ marginRight: '10px', color: '#1DA1F2' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ color: '#C13584' }} />
        </a>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.765959514152!2d30.143576797622693!3d-1.9398048579674951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76ec77abb07%3A0x39b5394a977ee4a1!2sAdventist%20University%20of%20Central%20Africa!5e0!3m2!1sen!2srw!4v1729775313379!5m2!1sen!2srw"
          width="1000"
          height="300"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Adventist University of Central Africa Map"
        ></iframe>
      </div>
    </footer>
  </div>
);

export default Home;
