import React from 'react';
import { MediaBar } from '../components/MediaBar';

export const Product = () => {
  return (
    <div className = "product">
      <h1 className = "home-h1">
        Productos
      </h1>
      <section className = "home-section"> 
        sección de productos
      </section>
      <MediaBar />
    </div>
  )
}