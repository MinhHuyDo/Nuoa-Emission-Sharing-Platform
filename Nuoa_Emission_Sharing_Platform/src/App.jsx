import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './screens/Home.jsx';
import Mypublishedpcf from './screens/MyPublishedPcfs.jsx';
import Incomingrequests from './screens/IncomingRequests.jsx';
import Browsepcf from './screens/BrowsePcf.jsx';
import AuthCallback from './screens/AuthCallback.jsx'; // Import the AuthCallback component
import './index.css';
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { isAuthenticated, redirectToCognito } from './auth/authUtils'; // Import authentication utilities

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      redirectToCognito(); // Redirect to Cognito login UI if not authenticated
    }
  }, [navigate]);

  return children;
};

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <RequireAuth>
        <Home/>
      </RequireAuth>
    )
  },
  {
    path:"/my-published-pcfs",
    element: (
      <RequireAuth>
        <Mypublishedpcf/>
      </RequireAuth>
    )
  },
  {
    path:"/incoming-requests",
    element: (
      <RequireAuth>
        <Incomingrequests/>
      </RequireAuth>
    )
  },
  {
    path:"/browse-pcfs",
    element: (
      <RequireAuth>
        <Browsepcf/>
      </RequireAuth>
    )
  },
  {
    path: '/auth/callback',
    element: <AuthCallback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Home from './screens/Home.jsx'
// import Mypublishedpcf from './screens/MyPublishedPcfs.jsx'
// import Incomingrequests from './screens/IncomingRequests.jsx'

// import Browsepcf from './screens/BrowsePcf.jsx'

// import './index.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
// {
//   path:"/",
//   element: <Home/>
// },

// {
//   path:"/my-published-pcfs",
//   element: <Mypublishedpcf/>
// },

// {
//   path:"/incoming-requests",
//   element: <Incomingrequests/>
// },

// {
//   path:"/browse-pcfs",
//   element: <Browsepcf/>
// }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )