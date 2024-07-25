import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import Admin from './Admin'
import Products from './components/Products/Products'
import Register from './components/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/register',
        element:<Register/>
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: []
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
