import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Signup } from './pages/Signup';
import { Layout } from './component/layout/Layout';
import './index.css';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import KakaoRedirectPage from './pages/KakaoRedirect';
import React from 'react';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path='/auth/callback' element={<KakaoRedirectPage /> } />
        <Route path="/Cart" element={<Cart />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
