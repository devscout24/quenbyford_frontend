import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { GlobalLoaderProvider } from './contexts/GlobalLoaderContext'
import { CustomCursor } from './components/CustomCursor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalLoaderProvider>
      <CustomCursor />
      <RouterProvider router={router} />
    </GlobalLoaderProvider>
  </StrictMode>,
)
