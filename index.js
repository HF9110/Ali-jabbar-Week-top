import React from 'react';
import { createRoot } from 'react-dom/client';
// Import the main application file
import App from './AliJabbarContestManager.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);