// src/components/Loader.js
import React from 'react';
import '../styles/Loader.css'; // Optional for custom styling

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
