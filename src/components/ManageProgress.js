import React, { useState, useEffect } from 'react';
import './styles/ProgressTracker.css';

const ProgressTrackerPage = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', progress: 75 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', progress: 25 },
        { id: 3, name: 'Mark Johnson', email: 'mark@example.com', progress: 50 },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', progress: 0 },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [sortAbove50, setSortAbove50] = useState(false);

    // Display all students initially or filter based on the search query
    useEffect(() => {
        const filtered = students.filter((student) =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [searchQuery, students]);

    // Sort students based on progress (above or below 50%)
    const handleSortToggle = () => {
        const sorted = sortAbove50
            ? students.filter((student) => student.progress < 50)
            : students.filter((student) => student.progress >= 50);
        setFilteredStudents(sorted);
        setSortAbove50((prev) => !prev);
    };

    return (
        <div className="progress-tracker-container">
            <h2>Student Orientation Progress Tracker</h2>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search student by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Sort Button */}
            <div className="sort-container">
                <button onClick={handleSortToggle}>
                    {sortAbove50 ? 'Show Below 50%' : 'Show Above 50%'}
                </button>
            </div>

            {/* Students Table */}
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Progress</th>
                        <th>Indicator</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.progress}%</td>
                            <td>
                                <div className={`progress-bar ${getProgressColorClass(student.progress)}`}>
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${student.progress}%` }}
                                    ></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Helper function to assign color class based on progress ranges
const getProgressColorClass = (progress) => {
    switch (progress) {
        case 0:
            return 'progress-red';
        case 25:
            return 'progress-orange';
        case 50:
            return 'progress-yellow';
        case 75:
            return 'progress-green';
        case 100:
            return 'progress-blue';
        default:
            return '';
    }
};

export default ProgressTrackerPage;
