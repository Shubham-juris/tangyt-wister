import React from 'react';
import { Routes ,Route,Link } from "react-router-dom";

import './App.css';
import Header from './Component/Header';
import { BrowserRouter } from 'react-router-dom';
import Aboutpage from './Pages/Aboutpage';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import Gallery from './Pages/Gallery';
import Contactus from './Pages/Contactus';
import Footer from './Component/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Aboutpage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contactus/>}/>
        </Route>
      </Routes>
      <Footer>
        <Link to ="/about"></Link>
      </Footer>
       
    </BrowserRouter>
  );
}

export default App;
