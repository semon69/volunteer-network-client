import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import VolunteerList from './components/Admin/VolunteerList.jsx';
import AddVolunteer from './components/Admin/AddVolunteer.jsx';
import Events from './components/Admin/Events.jsx';
import AddEvents from './components/Admin/AddEvents.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Bookings from './components/Bookings.jsx';
import PrivateRoutes from './Provider/PrivateRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/works')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/bookings',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      },
      {
        path: '/volunteerList',
        element: <VolunteerList></VolunteerList>
      },
      {
        path: '/addVolunteer',
        element: <AddVolunteer></AddVolunteer>
      },

      {
        path: '/volList',
        element: <VolunteerList></VolunteerList>
      },
      {
        path: '/events',
        element: <Events></Events>
      },
      {
        path: '/addEvents',
        element: <AddEvents></AddEvents>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
