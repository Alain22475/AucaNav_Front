import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  FaUsers, FaImage, FaBook, FaCalendarAlt, 
  FaSignOutAlt, FaChartLine 
} from 'react-icons/fa'; // Import icons
import './styles/AdminDashboard.css'; // Optional CSS styling
import ManageStudents from './ManageStudents'; // Students management component
import ManageGallery from './ManageGallery'; // Gallery management component
import ManageLibrary from './ManageLibrary'; // Library management component
import ManageEvents from './ManageEvents'; // Events management component
import ManageProgress from './ManageProgress'; // Progress management component

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('adminToken'); // Example: Clear auth state
        navigate('/admin-login'); // Redirect to admin login
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <ul className="sidebar-list">
                    <li>
                        <Link to="manage-students">
                            <FaUsers className="icon" /> Manage Students
                        </Link>
                    </li>
                    <li>
                        <Link to="manage-events">
                            <FaCalendarAlt className="icon" /> Manage Events
                        </Link>
                    </li>
                    <li>
                        <Link to="manage-progress">
                            <FaChartLine className="icon" /> Progress Track
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
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="manage-gallery" element={<ManageGallery />} />
                    <Route path="manage-library" element={<ManageLibrary />} />
                    <Route path="manage-events" element={<ManageEvents />} />
                    <Route path="manage-progress" element={<ManageProgress />} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;
