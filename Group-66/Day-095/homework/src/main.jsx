import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//useEffect runs based on when the component renders each time or first time, we control which renders it runs on
//we gave the useEffect function and a empty list which means it will run once at the start