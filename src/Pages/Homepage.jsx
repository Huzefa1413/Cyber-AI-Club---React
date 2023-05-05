import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestEvents from '../components/LatestEvents';

import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="heading">
        <h1>Welcome to Cyber AI Club</h1>
        <p>Empowering Minds, Securing Futures</p>
      </section>
      <UpcomingEvents />
      <section className="joinus">
        <h2>Want to be a part of US?</h2>
        <button>
          <Link to="/joinus">Join Us Now</Link>
        </button>
      </section>
      <section className="vision">
        <h1>Our Vision</h1>
        <p>
          Our vision is to empower the future generation with knowledge and
          skills in emerging technologies, specifically cyber and AI, through an
          inclusive and collaborative platform.
        </p>
      </section>
      <LatestEvents />
      <Footer />
    </>
  );
};

export default Homepage;
