import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter aqui
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Apenas um BrowserRouter em todo o app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);