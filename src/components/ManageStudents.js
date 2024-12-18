import React, { useState } from 'react';
import './styles/ManageStudents.css'; // Optional CSS for styling

const ManageStudents = () => {
  const [students, setStudents] = useState([]); // Student records
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing mode

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (isEditing) {
      // Update student
      setStudents((prev) =>
        prev.map((student) =>
          student.id === formData.id ? { ...formData } : student
        )
      );
      alert('Student updated successfully!');
    } else {
      // Add new student
      const newStudent = { ...formData, id: Date.now() }; // Assign a unique ID
      setStudents((prev) => [...prev, newStudent]);
      alert('Student added successfully!');
    }

    resetForm();
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      id: null,
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setIsEditing(false);
  };

  // Handle edit button click
  const handleEdit = (student) => {
    setFormData(student);
    setIsEditing(true);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents((prev) => prev.filter((student) => student.id !== id));
    }
  };

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-students-container">
      <h2>Manage Students</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Student Form */}
      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          {isEditing ? 'Update Student' : 'Add Student'}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      {/* Student List Table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confrim_P</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.confirmPassword}</td>
              <td>
                <button onClick={() => handleEdit(student)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(student.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;
