import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Info from "./pages/info"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <Routes>
            <Route index element={<App/>} />
            <Route path='/info' element={<Info/>}/>
          </Routes>
        </BrowserRouter>
  </StrictMode>,
)
