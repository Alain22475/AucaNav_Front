import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import './styles/AdminLogin.css'; // Optional: Create this CSS file for styling

const AdminLogin = () => {
    const navigate = useNavigate(); // For redirecting after successful login

    // Hardcoded admin credentials
    const hardcodedEmail = 'admin@example.com';
    const hardcodedPassword = 'admin123';

    // State to manage form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page

        // Check if the input matches the hardcoded credentials
        if (email === hardcodedEmail && password === hardcodedPassword) {
            localStorage.setItem('adminToken', 'authenticated'); // Store token in localStorage
            navigate('/admin-dashboard/manage-students'); // Redirect to admin dashboard
        } else {
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="admin-login-container">
            <h8>Admin Login</h8>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="adminEmail">Email</label>
                    <input 
                        type="email" 
                        id="adminEmail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="adminPassword">Password</label>
                    <input 
                        type="password" 
                        id="adminPassword" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="admin-login-button">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
