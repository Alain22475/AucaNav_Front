import React, { useState } from 'react';
import './styles/ManageGallery.css'; // Optional: Create a CSS file for styling

const ManageGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    fileType: '',
    campus: '',
    category: '',
    description: '',
    file: null,
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing state

  const campuses = ['Gishushu', 'Masoro', 'Ngoma']; // Campus options
  const fileTypes = ['Image', 'Video']; // File type options
  const categories = ['Class Map', 'Recreation Areas', 'Video Tour', 'Others']; // Categories

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload with validation (max 150MB)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.size > 150 * 1024 * 1024) {
      alert('File size should not exceed 150MB');
      return;
    }
    setFormData({ ...formData, file: selectedFile });
  };

  // Handle form submission (Add/Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing item
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === formData.id ? { ...formData } : item))
      );
      alert('Gallery item updated successfully!');
    } else {
      // Add a new item
      const newItem = { ...formData, id: Date.now() }; // Assign unique ID
      setGalleryItems((prev) => [...prev, newItem]);
      alert('Gallery item added successfully!');
    }

    resetForm();
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      fileType: '',
      campus: '',
      category: '',
      description: '',
      file: null,
    });
    setIsEditing(false);
  };

  // Handle editing an item
  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setGalleryItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Filter items based on search term
  const filteredItems = galleryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.campus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-gallery-container">
      <h2>Manage Gallery</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or campus"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Gallery Form */}
      <form onSubmit={handleSubmit} className="gallery-form">
        <input
          type="text"
          name="name"
          placeholder="Name of File"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* File Type Picker */}
        <select
          name="fileType"
          value={formData.fileType}
          onChange={handleChange}
          required
        >
          <option value="">Select File Type</option>
          {fileTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Campus Picker */}
        <select
          name="campus"
          value={formData.campus}
          onChange={handleChange}
          required
        >
          <option value="">Select Campus</option>
          {campuses.map((campus, index) => (
            <option key={index} value={campus}>
              {campus}
            </option>
          ))}
        </select>

        {/* Category Picker */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.mp4,.mov"
          onChange={handleFileChange}
          required={!isEditing}
        />

        <button type="submit" className="submit-button">
          {isEditing ? 'Update Item' : 'Add Item'}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      {/* Gallery Items List */}
      <table className="gallery-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Campus</th>
            <th>Category</th>
            <th>Description</th>
            <th>File</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.fileType}</td>
              <td>{item.campus}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <a href={URL.createObjectURL(item.file)} target="_blank" rel="noreferrer">
                  {item.file.name}
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(item)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="delete-button">
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

export default ManageGallery;
