import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // For styling

const Home = () => (
  <div className="home-container">
    <div className="content">
      <h2 className="content-title">Welcome to AUCA Navigate</h2>
      <p className="content-description">
        AUCA Student Orientation aims to provide new students with the 
        information and resources they need to successfully transition 
        into university life. Through this platform, students can explore 
        various programs, learn about campus policies, and get connected 
        with support services to make their academic journey easier.
      </p>
      <div className="button-group">
        <Link to="/admin-login">
          <button className="path-button">Admin Path</button>
        </Link>
        <Link to="/student-login">
          <button className="path-button">Student Path</button>
        </Link>
      </div>
    </div>
    <div className="image-container" />
  </div>
);

export default Home;
