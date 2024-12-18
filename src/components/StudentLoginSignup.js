import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/StudentLoginSignup.css'; // Optional: Create a separate CSS file for styling

const StudentLoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate(); // Use navigate for routing

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleLoginSignup = (e) => {
        e.preventDefault();
        // For now, directly navigate to dashboard on login (skip authentication logic)
        navigate('/student-dashboard/home');
    };

    return (
        <div className="student-container">
            <h7>{isSignup ? 'Signup' : 'Login'}</h7>
            <form onSubmit={handleLoginSignup}>
                {isSignup && (
                    <div className="form-group">
                        <label htmlFor="fullName">Full Names</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="studentEmail">Email</label>
                    <input 
                        type="email" 
                        id="studentEmail" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                {isSignup && (
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="studentPassword">Password</label>
                    <input 
                        type="password" 
                        id="studentPassword" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                {isSignup && (
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                )}
                <button type="submit" className="login-button">
                    {isSignup ? 'Signup' : 'Login'}
                </button>
                <p>
                    {isSignup ? 'Already have an account?' : 'New user?'}
                    <span onClick={toggleForm} className="toggle-form">
                        {isSignup ? ' Login' : ' Signup'}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default StudentLoginSignup;
