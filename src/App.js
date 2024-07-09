import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';
import Products from './pages/products/Products';
import Card from './pages/card/Card.js'
import Contact from './pages/contact/Contact.js';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/produits" element={<Products />}/>
          <Route path="/degustation" element={<Card />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
