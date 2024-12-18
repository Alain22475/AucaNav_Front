import React from 'react';
import { FaBell, FaCheckCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa'; // Import icons
import '../components/styles/StudentNotifications.css'; // Import CSS for styling

const notifications = [
  {
    id: 1,
    type: 'info',
    icon: <FaInfoCircle />,
    title: 'New Event Added',
    message: 'Don’t miss the career fair happening next week!',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'success',
    icon: <FaCheckCircle />,
    title: 'Assignment Submitted',
    message: 'Your assignment has been successfully submitted.',
    time: 'Yesterday',
  },
  {
    id: 3,
    type: 'warning',
    icon: <FaExclamationTriangle />,
    title: 'Payment Reminder',
    message: 'Your tuition payment is due in 3 days.',
    time: '2 days ago',
  },
  {
    id: 4,
    type: 'default',
    icon: <FaBell />,
    title: 'General Notification',
    message: 'Faculty meeting at 2 PM in Room A-12.',
    time: '1 week ago',
  },
];

const Notifications = () => (
  <div className="notifications-container">
    <h1>Notifications</h1>
    <div className="notification-list">
      {notifications.map((notification) => (
        <div key={notification.id} className={`notification-card ${notification.type}`}>
          <div className="notification-icon">{notification.icon}</div>
          <div className="notification-content">
            <h2 className="notification-title">{notification.title}</h2>
            <p className="notification-message">{notification.message}</p>
            <span className="notification-time">{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;
