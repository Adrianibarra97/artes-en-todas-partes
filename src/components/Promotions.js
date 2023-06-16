import React from 'react';
// import { Link } from 'react-router-dom';
// import { products } from '../data/products';

export const Promotions = ({limit}) => {
  return (
    <section className = "promotions">
      {/* {
        products.slice(0, limit).map(product => (
          <article key = { product.id } className = "work-item">
              <div className = 'mask'>
                <img 
                  src = {"/images/" + product.id}
                  alt = 'images'
                />
              </div>
              <span>{ product.category }</span>
              <h2><Link to = { "/project/" + product.url }>{ product.name }</Link></h2>
              <h3>{ product.tec }</h3>
          </article>
        ))
      } */}
      Promociones
    </section>
  )
}