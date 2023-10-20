import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import Root from './Routes/Root/Root';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Home from './Routes/Home/Home';
import AddProduct from './Routes/AddProduct/AddProduct'
import MyCart from './Routes/MyCart/MyCart';
import Nike from './Components/Nike/Nike';
import Adidas from './Components/Adidas/Adidas';
import Gucci from './Components/Gucci/Gucci';
import Zara from './Components/Zara/Zara';
import HM from './Components/H&M/HM';
import Levis from './Components/Levis/Levis';
import AuthProvider from './Providers/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/Nike",
        element: <Nike></Nike>
      },
      {
        path: "/Adidas",
        element: <Adidas></Adidas>
      },
      {
        path: "/Gucci",
        element: <Gucci></Gucci>
      },
      {
        path: "/Zara",
        element: <Zara></Zara>
      },
      {
        path: "/H&M",
        element: <HM></HM>
      },
      {
        path: "/Levi's",
        element: <Levis></Levis>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
