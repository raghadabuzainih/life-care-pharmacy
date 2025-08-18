import './css/App.css'
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes/AppRoutes'
import React from 'react'
import './data/i18n'

const root = createRoot(document.getElementById('root'))

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)