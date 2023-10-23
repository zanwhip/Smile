import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/HomePage';
import Project from './features/Project';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
