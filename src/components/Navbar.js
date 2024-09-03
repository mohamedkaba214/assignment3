// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav style={{ border: '2px solid green', backgroundColor: '#dcedc8', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li><a href="/">Home</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/tests">Tests</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
