import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider dir="rtl">
    <App />
  </ThemeProvider>
);
