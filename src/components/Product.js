import React from 'react';
import { MediaBar } from '../components/MediaBar';
import { products } from '../data/products';

export const Product = () => {
  
  return (
    <div className = "product">
      <h1 className = "home-h1">
        Productos
      </h1>
      <section className = "d-flex justify-content-center align-items-center product-section"> 
        <div className = "d-flex flex-wrap justify-content-center card-container"> 
          {
            products.map(product => (
              <div key = { product.id } className = "card m-2">
                <img src = { "/images/" + product.image } className = "card-img-top" alt = { product.image } />
                <div className = "card-body">
                  <h5 className = "card-title">{ product.name }</h5>
                  <p className = "card-text">{ product.describe }</p>
                  <h5 className = "card-title">{ product.price }</h5>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <MediaBar />
    </div>
  )
}