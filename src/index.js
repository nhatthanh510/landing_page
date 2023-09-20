import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Service from './elements/Service'
import ServiceDetails from './elements/ServiceDetails'
import Contact from './elements/Contact'
import About from './elements/About'
import Blog from './elements/Blog'
import BlogDetails from './elements/BlogDetails'
import Team from './blocks/Team'
import PortfolioDetails from './elements/PortfolioDetails'
import Error404 from './elements/error404'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/service-details',
    element: <ServiceDetails />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  // {
  //   path: '/our-customer',
  //   element: <OurClient />,
  // },
  // {
  //   path: '/testimonials',
  //   element: <FullTestimonial />,
  // },
  {
    path: '/portfolio-details',
    element: <PortfolioDetails />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/blogs',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetails />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
