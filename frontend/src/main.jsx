import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ShopContextprovider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <ShopContextprovider>
    <App />
  </ShopContextprovider>
  </BrowserRouter>
)
