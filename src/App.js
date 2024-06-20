import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Products from './pages/products/Products';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/produits" element={<Products />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
