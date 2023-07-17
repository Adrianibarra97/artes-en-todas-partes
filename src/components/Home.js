import React from 'react';
import { Carousel } from '../components/Carousel';
import { MediaBar } from '../components/MediaBar';

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
      <MediaBar />
    </div>
  )
}