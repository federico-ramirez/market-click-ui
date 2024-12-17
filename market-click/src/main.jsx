import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  * as ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import { AppProvider } from './context/AppContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>,
)
