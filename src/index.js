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