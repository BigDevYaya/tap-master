import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import App from './App.jsx'
import { AppProvider } from './utils/AppContext.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProvider>
  </StrictMode>
)
