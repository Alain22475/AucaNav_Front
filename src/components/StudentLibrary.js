// src/pages/Library.js
import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa'; // Import folder icons
/*import './styles/StudentLibrary.css'; // CSS styling*/

// Folder component to handle nested folders
const Folder = ({ title, children, nested = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => setIsOpen(!isOpen);

  const folderClass = nested ? 'nested-folder' : 'folder';
  const headerClass = nested ? 'nested-folder-header' : 'folder-header';
  const iconClass = nested ? 'nested-folder-icon' : 'folder-icon';

  return (
    <div className={folderClass + (isOpen ? ' open' : '')}>
      <div className={headerClass} onClick={toggleFolder}>
        {isOpen ? (
          <FaFolderOpen className={iconClass} />
        ) : (
          <FaFolder className={iconClass} />
        )}
        {title}
      </div>
      {isOpen && (
        <div className={nested ? 'nested-folder-content' : 'folder-content'}>
          {children}
        </div>
      )}
    </div>
  );
};

// Main Library component
const Library = () => (
  <div className="page-container">
    <h5>Library</h5>
    <p>Access the digital library and explore available resources by faculty.</p>

    <div className="folder-list">
      <Folder title="IT">
        <Folder title="Programming Books" nested>
          <ul>
            <li>
              <a href="/library/IT/programming-book.pdf" target="_blank" rel="noopener noreferrer">Open</a>
              <a href="/library/IT/programming-book.pdf" download>Download</a>
            </li>
          </ul>
        </Folder>
        <Folder title="Cybersecurity Books" nested />
      </Folder>

      <Folder title="Accounting">
        <Folder title="Financial Accounting" nested />
        <Folder title="Auditing Resources" nested />
      </Folder>

      <Folder title="Finance">
        <Folder title="Investment Books" nested />
        <Folder title="Corporate Finance" nested />
      </Folder>

      <Folder title="Education">
        <Folder title="Teaching Methodologies" nested />
        <Folder title="Curriculum Design" nested />
      </Folder>

      <Folder title="Theology">
        <Folder title="Biblical Studies" nested />
        <Folder title="Church History" nested />
      </Folder>

      <Folder title="Nursing">
        <Folder title="Anatomy & Physiology" nested />
        <Folder title="Clinical Practice Guides" nested />
      </Folder>
    </div>
  </div>
);

export default Library;
