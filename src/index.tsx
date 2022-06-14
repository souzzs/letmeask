import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Faz a conexão com o firebase
import './services/firebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
