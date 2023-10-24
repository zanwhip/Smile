import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Project from './features/Project';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project',
    element: <Project />,
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
