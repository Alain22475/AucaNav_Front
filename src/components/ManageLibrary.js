import React, { useState } from 'react';
import './styles/ManageLibrary.css'; // Optional CSS for styling

const ManageLibrary = () => {
  const [books, setBooks] = useState([]); // State for managing books
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    bookName: '',
    faculty: '',
    course: '',
    file: null,
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing state

  const faculties = ['IT', 'Accounting', 'Finance', 'Education', 'Theology', 'Nursing']; // Faculty options

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Handle form submission (Add/Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing book
      setBooks((prev) =>
        prev.map((book) =>
          book.id === formData.id ? { ...formData } : book
        )
      );
      alert('Book updated successfully!');
    } else {
      // Add a new book
      const newBook = { ...formData, id: Date.now() }; // Assign unique ID
      setBooks((prev) => [...prev, newBook]);
      alert('Book added successfully!');
    }

    resetForm();
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      id: null,
      bookName: '',
      faculty: '',
      course: '',
      file: null,
    });
    setIsEditing(false);
  };

  // Handle editing a book
  const handleEdit = (book) => {
    setFormData(book);
    setIsEditing(true);
  };

  // Handle deleting a book
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks((prev) => prev.filter((book) => book.id !== id));
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-library-container">
      <h2>Manage Library</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by book name or faculty"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Book Form */}
      <form onSubmit={handleSubmit} className="library-form">
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formData.bookName}
          onChange={handleChange}
          required
        />

        {/* Faculty Picker as Combo Box */}
        <select
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          required
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty, index) => (
            <option key={index} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required={!isEditing}
        />
        <button type="submit" className="submit-button">
          {isEditing ? 'Update Book' : 'Add Book'}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      {/* Books List Table */}
      <table className="books-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Faculty</th>
            <th>Course</th>
            <th>File</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.faculty}</td>
              <td>{book.course}</td>
              <td>
                <a href={URL.createObjectURL(book.file)} target="_blank" rel="noreferrer">
                  {book.file.name}
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(book)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(book.id)} className="delete-button">
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

export default ManageLibrary;
