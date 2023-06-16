import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { Home } from '../components/Home';
import { Product } from '../components/Product';
import { Contact } from '../components/Contact';

export const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      {/* Header and Nav */}
      <Navigation />
            
      {/* Main content */}
      <section className = "content">
        <Routes>
          <Route path = "/" element = { <Navigate to = "/home" /> } />
          <Route path = "/home" element = { <Home /> } />
          <Route path = "/products" element = { <Product /> } />
          <Route path = "/contact" element = { <Contact /> } />
          <Route path = "*" element = { 
            <div className = "page">
              <h1 className = "heading">Error 404</h1>
            </div>
          } />
        </Routes>
      </section>
            
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}