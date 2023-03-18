import { useState, React } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}

export default App
