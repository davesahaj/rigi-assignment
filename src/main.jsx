import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, ThemeProvider } from './providers';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider />
    </ThemeProvider>
  </React.StrictMode>
);
