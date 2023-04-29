import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestEvents from '../components/LatestEvents';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="heading">
        <Zoom>
          <h1>Welcome to Cyber AI Club</h1>
          <p>Empowering Minds, Securing Futures</p>
        </Zoom>
      </section>
      <UpcomingEvents />
      <Slide left>
        <section className="joinus">
          <h2>Want to be a part of US?</h2>
          <button>
            <Link to="/joinus">Join Us Now</Link>
          </button>
        </section>
      </Slide>
      <Slide right>
        <section className="vision">
          <h1>Our Vision</h1>
          <p>
            Our vision is to empower the future generation with knowledge and
            skills in emerging technologies, specifically cyber and AI, through
            an inclusive and collaborative platform.
          </p>
        </section>
      </Slide>
      <LatestEvents />
      <Footer />
    </>
  );
};

export default Homepage;
