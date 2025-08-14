import React from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
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

export const AppRoutes = () => {
  const [isLoggin, setIsLoggin] = React.useState(false)
  //to get the previous page
  //when click to anauthorized page & redirected to login page
  const location = useLocation()

  return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={isLoggin ? <Products /> : <Navigate to="/login" state={{from: location}} replace/>}/>
          <Route path='contact' element={isLoggin ? <Contact /> : <Navigate to="/login"  state={{from: location}} replace/>}/>
          <Route path='/item/:id' element={isLoggin ? <Item /> : <Navigate to="/login"  state={{from: location}} replace/>}/>
          <Route path='/category/:name' element={isLoggin ? <Category /> : <Navigate to="/login" state={{from: location}} replace/>}/>
          <Route path='/login' element={<Login isLoggin={setIsLoggin}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
  )
}