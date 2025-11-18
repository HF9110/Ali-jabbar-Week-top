import React from 'react';
import { createRoot } from 'react-dom/client';
// استدعاء الملف الرئيسي
import App from './AliJabbarContestManager.jsx';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  );
} else {
    console.error("Root element #root not found.");
}
