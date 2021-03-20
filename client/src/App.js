import './App.css';
import React, { useState, useEffect } from 'react';
import Search from './screens/search';

function App() {
  const [message, setMessage] = useState('');
  // Send a request to the server on port 8080 to retrieve message
  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setMessage(res);
      });
  });

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
