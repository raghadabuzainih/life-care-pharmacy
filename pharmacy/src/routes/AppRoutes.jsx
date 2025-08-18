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
  const [lang, setLang] = React.useState('') //wanna pass lang to products.jsx, category.jsx, item.jsx
  //to make products appear in the same language
  //note --> data folder contain products.json in ar & en

  return (
      <Routes>
        <Route path='/' element={<Navbar isLoggin={isLoggin} setIsLoggin={setIsLoggin}/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={isLoggin ? <Products lang={lang}/> : <Navigate to="/login" state={{from: location}} replace/>}/>
          <Route path='contact' element={isLoggin ? <Contact /> : <Navigate to="/login"  state={{from: location}} replace/>}/>
          <Route path='/item/:id' element={isLoggin ? <Item lang={lang}/> : <Navigate to="/login"  state={{from: location}} replace/>}/>
          <Route path='/category/:name' element={isLoggin ? <Category lang={lang}/> : <Navigate to="/login" state={{from: location}} replace/>}/>
          <Route path='/login' element={<Login isLoggin={setIsLoggin}/>} />
          <Route path="/signup" element={<Signup isLoggin={setIsLoggin} setLanguage={setLang}/>} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
  )
}