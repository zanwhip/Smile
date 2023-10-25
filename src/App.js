import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/HomePage';
import Contact from './features/ContactPage';
import DetailProject from './features/DetailProject';
import Project from './features/Project';
import DetailMemberPage from './features/DetailMemberPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/detailproject" element={<DetailProject/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/detailmember" element={<DetailMemberPage/>} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;