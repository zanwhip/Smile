import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './features/HomePage';
import Contact from './features/ContactPage';
import DetailProject from './features/DetailProject';
import Project from './features/Project';
import Header from '../src/components/Header';
import MemberPage from './features/MemberPage';
<<<<<<< HEAD
import Newfeedpage from './features/NewfeedPage'
import About from './features/AboutPage';
=======
import DetailMemberPage from './features/DetailMemberPage';
import Newfeedpage from './features/NewfeedPage'
>>>>>>> dff6f94e65f3b1636b449a6940f99066a93c45d1

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/detailproject',
    element: <DetailProject />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/member',
    element: <MemberPage />,
  },
  {
<<<<<<< HEAD
    path: '/newfeed',
    element: <Newfeedpage />,
  },
  {
    path: '/about',
    element: <About />,
  },
=======
    path: '/detail-member',
    element: <DetailMemberPage />,
  },
  {
    path: '/newfeed',
    element: <Newfeedpage />,
  },
>>>>>>> dff6f94e65f3b1636b449a6940f99066a93c45d1
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();