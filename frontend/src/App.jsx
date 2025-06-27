
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './Components/Header';
import Footer from './Components/Footer';
import Addjob from './Components/Addjob';
import Hero from './Components/Hero';

import Homepage from './Pages/Components/Jobs';
import About from './Pages/About';
import Service from './Pages/Service';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';

import Signup from './Pages/Signup';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
  
      <Header />
      {isHome && <Hero />}
      {/* {isHome && <Cards/>} */}
      
 
      <Routes>
        <Route path='/postjobs' element={<Addjob></Addjob>}></Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup />} />
    
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

