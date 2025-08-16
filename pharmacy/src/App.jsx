import './css/App.css'
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes/AppRoutes'

const root = createRoot(document.getElementById('root'))

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

root.render(<App />)