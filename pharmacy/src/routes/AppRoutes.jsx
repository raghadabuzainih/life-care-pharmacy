import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Products } from '../pages/Products'
import { Contact } from '../pages/Contact'
import { Item } from '../pages/Item'
import { Category } from "../components/Category"
import { Login } from '../pages/Login'
import { Signup } from "../pages/Signup"
import { Error } from '../pages/Error'
import { AuthElement } from "../components/AuthElement"

export const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
      <Routes>
        <Route path='/' element={<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<AuthElement isLoggedIn={isLoggedIn} element={<Products />}/>}/>
          <Route path='contact' element={<AuthElement isLoggedIn={isLoggedIn} element={<Contact />}/>}/>
          <Route path='/item/:id' element={<AuthElement isLoggedIn={isLoggedIn} element={<Item />}/>}/>
          <Route path='/category/:name' element={<AuthElement isLoggedIn={isLoggedIn} element={<Category />}/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
  )
}