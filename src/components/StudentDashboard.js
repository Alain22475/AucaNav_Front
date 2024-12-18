// src/pages/StudentDashboard.js
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaImage, FaBook, FaCalendarAlt, 
  FaBell, FaUser, FaSignOutAlt, FaConciergeBell, FaUniversity 
} from 'react-icons/fa';
import './styles/StudentDashboard.css'; // CSS styling
import Home from './StudentHome'; // Import Home component
import Gallery from './StudentGallery'; // Import Gallery component
import Faculties from './StudentFaculties'; // Import Faculties component
import Events from './StudentEvent'; // Import Events component
import Notifications from './StudentNotifications'; // Import Notifications component
import Services from './StudentServices'; // Import Services component
import Library from './StudentLibrary'; // Import Library component
import Profile from './StudentProfile'; // Import Profile component

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout, e.g., clearing local storage or authentication state
    localStorage.removeItem('userToken'); // Example
    navigate('/student-login'); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li>
            <Link to="home">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="gallery">
              <FaImage className="icon" /> Gallery
            </Link>
          </li>
          <li>
            <Link to="faculties">
              <FaUniversity className="icon" /> Faculties
            </Link>
          </li>
          <li>
            <Link to="events">
              <FaCalendarAlt className="icon" /> Events
            </Link>
          </li>
          <li>
            <Link to="notifications">
              <FaBell className="icon" /> Notifications
            </Link>
          </li>
          <li>
            <Link to="services">
              <FaConciergeBell className="icon" /> Services
            </Link>
          </li>
          <li>
            <Link to="library">
              <FaBook className="icon" /> Library
            </Link>
          </li>
          <li>
            <Link to="profile">
              <FaUser className="icon" /> Profile
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="icon" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-content">
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faculties" element={<Faculties />} />
          <Route path="events" element={<Events />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="services" element={<Services />} />
          <Route path="library" element={<Library />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default StudentDashboard;
