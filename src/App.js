import React from 'react';
import './App.css';
import Earthquake from './components/earthquake';

function App() {
  return (
    <div className="App">
      <h1>Recent Earthquakes(>=4)</h1>
      <Earthquake/>
    </div>
  );
}

export default App;
