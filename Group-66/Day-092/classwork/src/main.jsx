
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)


//props drilling is the process of passing data from a parent component to a deeply nested child component through multiple components that do not need the data themselves.
//its a problem because it makes code hard to read and maintain while slowing down performance with unnecessary re-renders.
//Context API helps us avoid this problem by giving us a way to share the data