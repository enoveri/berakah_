import React from 'react';
import Hero from '../components/home/Hero';
import PrayerSection from '../components/home/PrayerSection';
import FeaturedEvents from '../components/home/FeaturedEvents';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PrayerSection />
      <FeaturedEvents />
    </div>
  );
};

export default HomePage;
