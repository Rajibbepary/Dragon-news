import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import  AuthProvider  from './provider/AuthProvuder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
   
  </StrictMode>,
)