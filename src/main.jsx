import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import { ThmeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThmeProvider>
      <RouterProvider router={router} />
    </ThmeProvider>
  </StrictMode>,
)
