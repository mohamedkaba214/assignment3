// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Use state to store the user's age
  const [userAge, setUserAge] = useState(); //

  // Handle input change
  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <div className="App">
      <label style={{ marginTop: '20px' }}>
        Please enter your age: 
        <input 
          type="number" 
          placeholder="Type your age" 
          value={userAge} 
          onChange={handleAgeChange} 
          style={{ marginLeft: '10px', padding: '5px' }}
          min="0" // Prevents negative numbers
        />
        </label>
        <Header age={userAge} />
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;

