import React from 'react';
import { Carousel } from '../components/Carousel';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Promotions } from './Promotions';

export const Home = () => {
  return (
    <div className = "home">
      <h3 className = "home-h1">
        Lo nuevo!
      </h3>
      <section className = "home-section-carousel">
        <div className = "home-carousel">
          <Carousel />
        </div>
      </section>
      <section className = "home-section-media">
        <div className = "home-media">
          <h4 className = "home-text-media">Para una atención personalizada buscanos en nuestras redes</h4>
          <div className = "home-logos-media">
            <NavLink 
              className = "home-logo-media bi bi-instagram"
              to = "https://instagram.com/"
              target = "_BLANK"
            />
            <NavLink
              className = "home-logo-media bi bi-facebook"
              to = "https://facebook.com/"
              target = "_BLANK"
            />
            <NavLink
              className = "home-logo-media bi bi-twitter"
              to = "https://twitter.com/"
              target = "_BLANK"
            />
            <NavLink
              className = "home-logo-media bi bi-whatsapp"
              to = "https://whatsapp.com/"
              target = "_BLANK"
            />
          </div>
        </div>
      </section>
    </div>
  )
}