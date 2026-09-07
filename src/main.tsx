import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
=======
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el elemento #root en el documento')
}

createRoot(rootElement).render(
>>>>>>> 93aea2dfe2c203a385d1f01492394e2c991137ee
  <StrictMode>
    <App />
  </StrictMode>,
)
