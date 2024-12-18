import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact'; 
import AdminLogin from './components/AdminLogin'; 
import StudentLoginSignup from './components/StudentLoginSignup'; 
import StudentDashboard from './components/StudentDashboard'; // Import Student Dashboard
import AdminDashboard from './components/AdminDashboard'; // Optional: Admin dashboard

const App = () => (
  <Router>
    <Header />
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/student-login" element={<StudentLoginSignup />} />

      {/* Dashboard Routes */}
      <Route path="/student-dashboard/*" element={<StudentDashboard />} />
      <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
    </Routes>
  </Router>
);

export default App;
