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
import MyCart from './Routes/MyCart/MyCart'

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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
