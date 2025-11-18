import React from 'react';
import { createRoot } from 'react-dom/client';
// تم التحديث لاستدعاء الملف App.jsx
import App from './App.jsx';

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
