import React from 'react';
import Hero from '../components/home/Hero';
import LifeAtChurch from '../components/home/LifeAtChurch';
import ConnectSection from '../components/home/ConnectSection';
import FeaturedEvents from '../components/home/FeaturedEvents';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LifeAtChurch />
      <FeaturedEvents />
      <ConnectSection />
    </div>
  );
};

export default HomePage;
