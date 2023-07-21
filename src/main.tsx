import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App.tsx'
import { HomePage } from './pages/home/HomePage.tsx';
import { Rental } from './pages/rental/Rental.tsx';
import { ErrorPage } from './pages/error/ErrorPage.tsx';
import { AboutPage } from './pages/about/AboutPage.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='rental/:id' element={<Rental />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)

