import React, { useState, useEffect } from 'react';
import '../components/styles/StudentProfile.css';

const Profile = () => {
    const [tasks, setTasks] = useState({
        schoolTour: false,
        accessPolicies: false,
        accountsSetup: false,
        registration: false,
    });

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const completedTasks = Object.values(tasks).filter(task => task).length;
        const totalTasks = Object.keys(tasks).length;
        setProgress((completedTasks / totalTasks) * 100);
    }, [tasks]);

    const handleTaskChange = (event) => {
        const { name, checked } = event.target;
        setTasks((prevTasks) => ({
            ...prevTasks,
            [name]: checked,
        }));
    };

    const getProgressColor = () => {
        if (progress <= 25) return 'red';
        if (progress <= 50) return 'orange';
        if (progress <= 75) return 'green';
        if (progress < 100) return 'blue';
        return 'blue';
    };

    return (
        <div className="page-container">
            <h5>Profile</h5>
            <div className="profile-section">
                <div className="profile-circle">U</div> 
                <div className="personal-info">
                    <p>Name: John Doe</p>
                    <p>Phone: +1234567890</p>
                    <p>Email: johndoe@example.com</p>
                    <p>Nationality: Country</p>
                </div>

                <div className="orientation-tasks">
                    <h2>Orientation Tasks Progress</h2>
                    <div className="task-list">
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="schoolTour"
                                checked={tasks.schoolTour}
                                onChange={handleTaskChange}
                            />
                            <label>Take School Tour</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="accessPolicies"
                                checked={tasks.accessPolicies}
                                onChange={handleTaskChange}
                            />
                            <label>Access to School Policies</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="accountsSetup"
                                checked={tasks.accountsSetup}
                                onChange={handleTaskChange}
                            />
                            <label>Student Accounts Setup</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="registration"
                                checked={tasks.registration}
                                onChange={handleTaskChange}
                            />
                            <label>Registration</label>
                        </div>
                    </div>

                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: getProgressColor(),
                            }}
                        ></div>
                    </div>
                    <p10>Progress: {progress.toFixed(0)}%</p10>
                </div>

                <button className="save-profile-btn" onClick={() => alert('Changes saved!')}>
                    Save Changes
                </button></div>
        </div>
    );
};

export default Profile;
