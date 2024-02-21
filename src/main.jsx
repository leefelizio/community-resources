import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { InsertContent } from './pages/InsertContent.jsx';
import { Navigation } from './components/Navigation.jsx';
import { Home } from './pages/Home.jsx';
import { Contact } from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "", element: <Home />},
      // login

      { path: "insert", element: <InsertContent />},
      { path: "contact", element: <Contact />},
    ]
    // TO DO - add single resource
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
