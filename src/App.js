import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './features/HomePage';
import Contact from './features/ContactPage';
import DetailProject from './features/DetailProject';
import Project from './features/Project';
<<<<<<< HEAD
import MemberPage from './features/MemberPage';
=======
import DetailMemberPage from './features/DetailMemberPage';
>>>>>>> dff6f94e65f3b1636b449a6940f99066a93c45d1

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/detailproject" element={<DetailProject/>} />
      <Route path="/project" element={<Project/>} />
<<<<<<< HEAD
      <Route path="/member" element={<MemberPage/>} />
=======
      <Route path="/detailmember" element={<DetailMemberPage/>} />
>>>>>>> dff6f94e65f3b1636b449a6940f99066a93c45d1
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;