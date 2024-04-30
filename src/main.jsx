import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import Projects from './projects'
import App from './App'
import ErrorPage from './ErrorPage'

const site = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: 'projects',
    element: <Projects />
  },
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
