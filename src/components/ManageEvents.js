import React, { useState } from 'react';
import './styles/ManageEvents.css'; // Optional CSS for styling

const ManageEvents = () => {
  const [events, setEvents] = useState([]); // Event records
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    eventName: '',
    startDateTime: '',
    endDateTime: '',
    hostCampus: 'Gishushu',
    coordinator: '',
    description: '',
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

    if (isEditing) {
      // Update event
      setEvents((prev) =>
        prev.map((event) =>
          event.id === formData.id ? { ...formData } : event
        )
      );
      alert('Event updated successfully!');
    } else {
      // Add new event
      const newEvent = { ...formData, id: Date.now() }; // Assign a unique ID
      setEvents((prev) => [...prev, newEvent]);
      alert('Event added successfully!');
    }

    resetForm();
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      id: null,
      eventName: '',
      startDateTime: '',
      endDateTime: '',
      hostCampus: 'Gishushu',
      coordinator: '',
      description: '',
    });
    setIsEditing(false);
  };

  // Handle edit button click
  const handleEdit = (event) => {
    setFormData(event);
    setIsEditing(true);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents((prev) => prev.filter((event) => event.id !== id));
    }
  };

  // Filter events based on search term
  const filteredEvents = events.filter(
    (event) =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.coordinator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-events-container">
      <h2>Manage Events</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by event name or coordinator"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="startDateTime"
          placeholder="Start Date & Time"
          value={formData.startDateTime}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="endDateTime"
          placeholder="End Date & Time"
          value={formData.endDateTime}
          onChange={handleChange}
          required
        />
        <select
          name="hostCampus"
          value={formData.hostCampus}
          onChange={handleChange}
          required
        >
          <option value="Gishushu">Gishushu</option>
          <option value="Ngoma">Ngoma</option>
          <option value="Masoro">Masoro</option>
        </select>
        <input
          type="text"
          name="coordinator"
          placeholder="Coordinator"
          value={formData.coordinator}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">
          {isEditing ? 'Update Event' : 'Add Event'}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      {/* Event List Table */}
      <table className="events-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Start Date & Time</th>
            <th>End Date & Time</th>
            <th>Host Campus</th>
            <th>Coordinator</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.eventName}</td>
              <td>{event.startDateTime}</td>
              <td>{event.endDateTime}</td>
              <td>{event.hostCampus}</td>
              <td>{event.coordinator}</td>
              <td>{event.description}</td>
              <td>
                <button onClick={() => handleEdit(event)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(event.id)} className="delete-button">
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

export default ManageEvents;
