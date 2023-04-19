import React from 'react';

import App from '../App';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]

export default routes;