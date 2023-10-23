import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
