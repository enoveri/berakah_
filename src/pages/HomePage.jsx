import React from 'react';
import Hero from '../components/home/Hero';
import PrayerSection from '../components/home/PrayerSection';
import FeaturedEvents from '../components/home/FeaturedEvents';
import '../styles/themes.css';

const HomePage = () => {
  return (
    <div className="dreamy-bg">
      <Hero />
      <PrayerSection />
      <FeaturedEvents />
    </div>
  );
};

export default HomePage;
