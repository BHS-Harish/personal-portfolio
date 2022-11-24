import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Project from './components/Project';
import Error404 from './components/Error404';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error404/>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:<Error404/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement:<Error404/>
  },
  {
    path:"/portfolio",
    element:<Portfolio/>,
    errorElement:<Error404/>,
  },
  {
    path:'/portfolio/:projectname',
    element:<Project/>,
    errorElement:<Error404/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
