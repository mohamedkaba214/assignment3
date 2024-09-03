// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [birthYear, setBirthYear] = useState(''); // Store the birth year input

  // Calculate the current age based on the birth year
  const currentYear = new Date().getFullYear();
  const userAge = currentYear - birthYear;

  // Handle input change
  const handleBirthYearChange = (event) => {
    const inputYear = event.target.value;

    // Prevent negative numbers and enforce a minimum age of 12
    if (inputYear > 0 && currentYear - inputYear >= 12) {
      setBirthYear(inputYear);
    } else if (inputYear === '') {
      setBirthYear(''); // Allow clearing the input
    }
  };

  return (
    <div className="App">
      <label style={{ marginTop: '20px' }}>
        Please enter your birth year: 
        <input 
          type="number" 
          placeholder="Type your age" 
          value={birthYear} 
          onChange={handleBirthYearChange} 
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      {birthYear && <Header birthYear={birthYear} age={userAge} />}
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

