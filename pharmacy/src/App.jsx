import './css/App.css'
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes/AppRoutes'
import { CookiesProvider } from 'react-cookie'

const root = createRoot(document.getElementById('root'))

export const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CookiesProvider>
  )
}

root.render(<App />)