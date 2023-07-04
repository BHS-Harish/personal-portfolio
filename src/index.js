import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Error from './components/Error';
import './index.css';
import reportWebVitals from './reportWebVitals';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  },{
    path:'/portfolio',
    element:<Portfolio/>
  },
  {
    path:'/portfolio/:project',
    element:<Project/>
  },
  {
    path:'/*',
    element:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
