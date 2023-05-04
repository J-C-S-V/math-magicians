import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
