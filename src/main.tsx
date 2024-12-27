import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource-variable/onest";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
