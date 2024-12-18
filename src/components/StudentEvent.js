import React, { useState } from 'react';
import './styles/StudentEvent.css'; // Link to the CSS file

const eventsData = [
  { id: 1, name: 'Orientation Week', date: '2024-10-30', Time: '08:00 pm', location: 'Main Hall', description: 'Welcome new students to campus life.' },
  { id: 2, name: 'Hackathon 2024', date: '2024-11-05',  Time: '08:00 pm', location: 'IT Lab', description: 'A 48-hour coding competition.' },
  { id: 3, name: 'Business Seminar', date: '2024-11-12',  Time: '08:00 pm', location: 'Conference Room B', description: 'Learn from top business leaders.' },
  { id: 4, name: 'Graduation Ceremony', date: '2024-12-15',  Time: '08:00 pm', location: 'Auditorium', description: 'Celebrating the achievements of our graduates.' },
  { id: 5, name: 'Christmas Concert', date: '2024-12-20',  Time: '08:00 pm', location: 'Chapel', description: 'Enjoy festive music and performances for Christmass songs' },
  { id: 6, name: 'New Year Gala', date: '2024-12-31',  Time: '08:00 pm', location: 'Main Hall', description: 'Ring in the new year with music and celebration.' }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredEvents(
      eventsData.filter(
        (event) =>
          event.name.toLowerCase().includes(term) || event.location.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="events-page-container">
      <h5>Events</h5>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleSearch}
        className="event-search"
      />

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h8>{event.name}</h8>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Time:</strong> {event.Time}</p>
              <p>{event.description}</p>
              <div className="event-card-buttons">
                <button className="register-btn">I am Available</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
