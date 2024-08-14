import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Componente from './Componente.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componente/>
    <Componente/>
    <Componente/>
    <Componente/>
    <Componente/>
  </StrictMode>,
)
