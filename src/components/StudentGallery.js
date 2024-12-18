import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa'; // Import folder icon
import './styles/StudentGallery.css'; // CSS styling

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
        {isOpen && <div className={nested ? 'nested-folder-content' : 'folder-content'}>{children}</div>}
      </div>
    );
  };
  
  // Main Gallery component
  const Gallery = () => (
    <div className="page-container">
      <h5>Gallery</h5>
      <p>Explore the School by Taking Tour Through the Gallery.</p>
  
      <div className="folder-list">
        <Folder title="Gishushu">
          <Folder title="Video Tour" nested />
          <Folder title="Images Tour" nested />
          <Folder title="Recreation Areas" nested />
          <Folder title="Class Maps" nested />
        </Folder>
  
        <Folder title="Ngoma">
          <Folder title="Video Tour" nested />
          <Folder title="Images Tour" nested />
          <Folder title="Recreation Areas" nested />
          <Folder title="Class Maps" nested />
        </Folder>
  
        <Folder title="Masoro">
          <Folder title="Video Tour" nested />
          <Folder title="Images Tour" nested />
          <Folder title="Recreation Areas" nested />
          <Folder title="Class Maps" nested />
        </Folder>
      </div>
    </div>
  );
  
  export default Gallery;
