// src/components/Main.js
import React from 'react';

function Main() {
  return (
    <main style={{ border: '2px solid red', backgroundColor: '#ffccbc', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <img src="/pic4.jpg" alt="DMV Schedule" style={{ width: '100%' }} />
        </div>
        <table style={{ borderCollapse: 'collapse', width: '50%', margin: '0 auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f0f0f0' }}>Month</th>
              <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f0f0f0' }}>Day</th>
              <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f0f0f0' }}>Time</th>
              <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f0f0f0' }}>DMV Staff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>September</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>17th</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>1:00PM</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Saidou Diallo</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>October</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>1th</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2:00PM</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Penda Soum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Main;
