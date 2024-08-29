import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Inquiry from './pages/Inquiary';

function App() {
  return (
    <div className='wrap'>
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="inquiry" element={<Inquiry />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
