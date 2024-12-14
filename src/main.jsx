import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Roue from './Roue'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Roue />
  </StrictMode>,
)
