import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import GLightbox from 'glightbox';

// Routes import
import Routes from './router/routes.jsx'

// Stylesheets
import './index.css'
import './assets/css/font.css'
import './assets/scss/styles.scss'

import 'leaflet/dist/leaflet.css'

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import 'bootstrap'


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// init Swiper:
// Swiper();

// init GLightbox:
GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  autoplayVideos: true
});

const router = createBrowserRouter(
  createRoutesFromElements(Routes())
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
