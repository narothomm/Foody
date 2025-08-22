import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Layout/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import CartProvider from './provider/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>

    <AuthProvider>
      <CartProvider> 
       <RouterProvider router={router} />
       </CartProvider>
    </AuthProvider>
   
  </StrictMode>,
)
