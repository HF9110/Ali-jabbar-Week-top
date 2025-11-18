import React from 'react';
import { createRoot } from 'react-dom/client';
// التأكد من أن اسم الملف المستورد مطابق تمامًا
import App from './AliJabbarContestManager.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);