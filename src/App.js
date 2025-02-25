import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return ( 
  <div className='overflow-hidden'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product/:id' element={<ProductDetails/>} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  </div>
  );
};

export default App;