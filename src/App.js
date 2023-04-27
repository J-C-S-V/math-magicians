import React from 'react';
import Calculator from './components/calculator';
import Counter from './components/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Math magicians</h1>
      <Calculator />
      <Counter />
    </div>
  );
}

export default App;
