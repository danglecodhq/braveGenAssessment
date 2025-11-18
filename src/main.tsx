// ignore missing type declarations for this side-effect font import
// @ts-ignore
import '@fontsource/roboto';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import App from './App';
import { DashboardLayout } from './dashboard/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <DashboardLayout>
        <App />
      </DashboardLayout>
    </Router>
    ,
  </React.StrictMode>
);
