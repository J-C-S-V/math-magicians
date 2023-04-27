import React from 'react';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1 className="title">Math magicians</h1>
        <Calculator />
      </div>
      <Quote />
    </div>
  );
}

export default App;
