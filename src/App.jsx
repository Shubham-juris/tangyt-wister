import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import './App.css';
import Header from './Component/Header';
import Aboutpage from './Pages/Aboutpage';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import Gallery from './Pages/Gallery';
import Contactus from './Pages/Contactus';
import Footer from './Component/Footer';
import LoginRegister from './Component/LoginRegister';

function AppContent() {
  const location = useLocation();

  // Define routes where you DON'T want header/footer
  const hideHeaderFooter = location.pathname === "/admin";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Aboutpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/admin" element={<LoginRegister />} />
      </Routes>
      
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
