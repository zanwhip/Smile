import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/HomePage';
import Contact from './features/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
