import React from 'react'
import { Navigate, Route, } from 'react-router-dom'

//Layouts
import RootLayout from '../layouts/rootLayout'

//Components
import App from '../App'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

export default function routes() {

  return (
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </>
  )
}
