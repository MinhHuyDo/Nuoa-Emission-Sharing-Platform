import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './screens/Home.jsx'
import Mypublishedpcf from './screens/MyPublishedPcfs.jsx'
import Incomingrequests from './screens/IncomingRequests.jsx'

import Browsepcf from './screens/BrowsePcf.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element: <Home/>
},

{
  path:"/my-published-pcfs",
  element: <Mypublishedpcf/>
},

{
  path:"/incoming-requests",
  element: <Incomingrequests/>
},

{
  path:"/browse-pcfs",
  element: <Browsepcf/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)