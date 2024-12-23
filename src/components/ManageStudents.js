import React, { useEffect, useState } from 'react';
import './styles/ManageStudents.css'; // Optional CSS for styling
import Callapi from '../utils/callApi';
import { backend_path } from '../utils/enum';

const ManageStudents = () => {
  const [students, setStudents] = useState([]); // Student records
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // id: null,
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing mode
  useEffect(() => {
    fetchStudents();
  }, []);
  
  // Add the fetch function
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await Callapi.get(backend_path.DISPLAY_STUDENTS);
      if (response.data) {
        setStudents(response.data);
      }
    } catch (error) {
      setError(`Error fetching students: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };
  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check passwords match before making API call
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    setLoading(true);
    try {
      if (isEditing) {
        // Update existing student
        const response = await Callapi.put(`${backend_path.UPDATE_STUDENT} ${formData.id}`, formData);
        if (response.data) {
          setStudents((prev) =>
            prev.map((student) =>
              student.id === formData.id ? response.data : student
            )
          );
          alert('Student updated successfully!');
        }
      } else {
        // Add new student
        const response = await Callapi.post(backend_path.REGISTER, formData);
        if (response.data) {
          setStudents((prev) => [...prev, response.data]);
          console.log("Student added successfully!", setStudents);
          alert('Student added successfully!');
        }
      }
      resetForm();
    } catch (error) {
      setError(`Error: ${error.response?.data?.message || error.message}`);
      console.log("failed epically", setStudents);
    } finally {
      setLoading(false);
    }
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
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setLoading(true);
      try {
        await Callapi.delete(`${backend_path.DELETE_STUDENT}${id}`);
        setStudents(prev => prev.filter(student => student.id !== id));
        alert('Student deleted successfully!');
      } catch (error) {
        setError(`Error deleting student: ${error.response?.data?.message || error.message}`);
      } finally {
        setLoading(false);
      }
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
      
      {error && <div className="error-message">{error}</div>}
  
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
  
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
          required={!isEditing}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required={!isEditing}
        />
        
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            {isEditing ? 'Update Student' : 'Add Student'}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      </form>
  
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">No students found</td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button 
                      onClick={() => handleEdit(student)} 
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(student.id)} 
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageStudents;
