import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Kalender from "./pages/Kalender"
import Tagesplaner from "./pages/Tagesplaner"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/tagesplaner" element={<Tagesplaner />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

