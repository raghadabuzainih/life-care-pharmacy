import './css/App.css'
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Item } from './pages/Item'
import { Medications } from './pages/Medications'
import { Vitamins } from './pages/Vitamins'
import { MedicalDevices } from './pages/MedicalDevices'
import { PersonalCare } from './pages/PersonalCare'

const root = createRoot(document.getElementById('root'))

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='/item/:id' element={<Item />}/>
          <Route path='/medications-and-treatment' element={<Medications />}/>
          <Route path='/vitamins-and-supplements' element={<Vitamins />}/>
          <Route path='/personal-care-products' element={<PersonalCare />}/>
          <Route path='/medical-devices' element={<MedicalDevices />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(<App />)