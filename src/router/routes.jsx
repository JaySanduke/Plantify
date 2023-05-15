import { Route } from 'react-router-dom'

//Layouts
import RootLayout from '../layouts/rootLayout'

//Components
import App from '../App'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import PickLocation from '../pages/PickLocation'
import PollutantsAndPlants from '../pages/PollutantsAndPlants'
import PR from '../pages/PR'

export default function routes() {

  return (
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="location" element={<PickLocation />} />
        <Route path="pollutionandplants" element={<PollutantsAndPlants />} />
        <Route path="pr" element={<PR />} />
      </Route>
    </>
  )
}
