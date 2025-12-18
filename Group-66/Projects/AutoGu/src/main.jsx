import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from '../Context/AuthContext.jsx'
import { FilteredCarsProvider } from '../Context/filteredCarsContext.jsx'
import { AdminProvider } from '../Context/adminContext.jsx'
import { CartProvider } from '../Context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <CartProvider>
          <FilteredCarsProvider>
              <AdminProvider>
                  <App />
              </AdminProvider> 
          </FilteredCarsProvider>
        </CartProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
)
