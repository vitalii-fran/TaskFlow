import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleButtonClick = async () => {
    try {
      const res = await fetch('https://s8mtxsgtgh.execute-api.us-east-1.amazonaws.com/dev/');
      const data = await res.json();
      setResponse(data.body);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskFlow Frontend</h1>
        <button onClick={handleButtonClick}>Fetch Data</button>
        <p>Response: {response}</p>
      </header>
    </div>
  );
}

export default App;

