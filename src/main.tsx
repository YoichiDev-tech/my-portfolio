import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

// Global styles (single CSS file for the whole design system).
import './styles/globals.css';

const rootElement = document.getElementById('root');

// Guard in case the root element is missing.
if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing. */}
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);