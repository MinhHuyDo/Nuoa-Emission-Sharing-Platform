import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home.jsx';
import BrowsePcf from './screens/BrowsePcf.jsx';
import TableMPP from './components/table/table-mpp/TableMPP.jsx';
import OwnedPcfDetail from './components/pcfdetail/ownedpcfdetail/OwnedPcfDetail.jsx';
import UpdatePcfForm from './components/form/updatepcfform/UpdatePcfForm.jsx';
import NewPcfForm from './components/form/newpcfform/NewPcfForm.jsx';
import IncomingRequests from './screens/IncomingRequests.jsx';
import MyPublishedPcfs from './screens/MyPublishedPcfs.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/my-published-pcfs',
    element: <MyPublishedPcfs />,
    children: [
      {
        path: '',
        element: <TableMPP />,
      },
      {
        path: 'new-pcf',
        element: <NewPcfForm />,
      },
      {
        path: 'pcf-detail/:id',
        element: <OwnedPcfDetail />,
      },
      {
        path: 'update-pcf',
        element: <UpdatePcfForm />,
      },
    ],
  },
  {
    path: '/incoming-requests',
    element: <IncomingRequests />,
  },
  {
    path: '/browse-pcfs',
    element: <BrowsePcf />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
