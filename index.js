import React from 'react';
import { createRoot } from 'react-dom/client';
// تم تغيير اسم الاستيراد لتجنب أي تعارضات محتملة في النطاق (Scope)
import AliJabbarApp from './AliJabbarContestManager.jsx';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AliJabbarApp /> 
  </React.StrictMode>
);
