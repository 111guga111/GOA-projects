import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './Contexts/cartAddContext.jsx'
import ConfirmContext from './Contexts/confirmContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfirmContext>
      <CartProvider>
        <App />
      </CartProvider>
    </ConfirmContext>
  </StrictMode>,
)
