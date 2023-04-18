import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Routes from './router/route'

import './index.css'
import './assets/scss/styles.scss'
import './assets/css/main.css'
import './assets/css/font.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import * as PureCounter from '@srexi/purecounterjs'

import * as GLightbox from 'glightbox'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const router = createBrowserRouter(Routes);

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

// window.addEventListener('load', () => {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     preloader.remove();
//   }
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div id="preloader"></div> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
