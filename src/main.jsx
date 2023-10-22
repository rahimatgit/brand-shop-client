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
import AuthProvider from './Providers/AuthProvider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import Products from './Components/Products/Products';

import Details from './Components/Details/Details';
import Update from './Routes/Update/Update';
import Error from './Routes/Error/Error';

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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/update/:name/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => {
          return fetch(`https://assignment-10-brand-shop-server.vercel.app/products/${params.name}/${params.id}`)
        }
      },
      {
        path: "/carts",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://assignment-10-brand-shop-server.vercel.app/carts')
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: ({ params }) => {
          console.log(params.brandName)
          return fetch(`https://assignment-10-brand-shop-server.vercel.app/products/${params.brandName}`)
        }
      },
      {
        path: "/products/:name/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => {
          
          return fetch(`https://assignment-10-brand-shop-server.vercel.app/products/${params.name}/${params.id}`)
        }
      },
      {
        path: "*",
        element: <Error></Error>
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
