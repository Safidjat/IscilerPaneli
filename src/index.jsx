import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <div className='w-full max-desk:pt-[20px]! desk:h-[100vh] desk:grid desk:place-items-center'>
    <App />
  </div>
)
