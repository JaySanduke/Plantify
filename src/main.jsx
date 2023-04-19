import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  useNavigation
} from 'react-router-dom'


import './index.css'
import './assets/scss/styles.scss'
import './assets/css/main.css'
import './assets/css/font.css'

import Routes from './router/routes'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import * as PureCounter from '@srexi/purecounterjs'

import * as GLightbox from 'glightbox'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const router = createBrowserRouter(
  createRoutesFromElements(Routes())
);

const pure = new PureCounter({
  selector: '.purecounter'
});

const lightbox = GLightbox({
  selector: '.glightbox'
});

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
