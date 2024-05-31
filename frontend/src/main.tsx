import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { ThemeProvider } from './providers/ThemeProvider/theme-provider';
import CartProvider from './providers/CartProvider/cart';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
