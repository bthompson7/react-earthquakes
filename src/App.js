import React from 'react';
import './App.css';
import Earthquake from './components/earthquake';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Recent Earthquakes</h1>
      <Earthquake/>
    </div>
  );
}

export default App;
