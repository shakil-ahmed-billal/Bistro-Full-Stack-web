import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './provider/AuthProvider.jsx';
import router from './router/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
