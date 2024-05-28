import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import StoreContextProvider from './context/StoreContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);
