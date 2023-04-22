import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestEvents from '../components/LatestEvents';

const Events = () => {
  return (
    <>
      <Navbar />
      <UpcomingEvents />
      <LatestEvents />
      <Footer />
    </>
  );
};

export default Events;
