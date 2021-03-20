import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [message, setMessage] = useState('');
  // Send a request to the server on port 8080 to retrieve message
  useEffect(() => {
    fetch('http://localhost:8080/hello')
			.then(response => {
				return response.json();
			})
			.then(res => {
				setMessage(res);
			})
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
}

export default App;
