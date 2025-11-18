// ignore missing type declarations for this side-effect font import
// @ts-ignore
import '@fontsource/roboto';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import App from './App';
//import { DashboardLayout } from './dashboard/Layout';
import { DashboardLayout2 } from './dashboard/DashboardLayout2';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <DashboardLayout2>
        <App />
      </DashboardLayout2>
    </Router>
    ,
  </React.StrictMode>
);
