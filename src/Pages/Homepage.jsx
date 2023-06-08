import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestEvents from '../components/LatestEvents';
import Ads from '../components/Ads';

import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <section class="heading">
        <div class="heading-content">
          <h1>Welcome to Cyber AI Club</h1>
          <p>Empowering Minds, Securing Futures</p>
        </div>
        <Ads />
      </section>
      <UpcomingEvents />
      <section className="joinus" data-aos="flip-right">
        <h2>Want to be a part of US?</h2>
        <button>
          <Link to="/joinus">Join Us Now</Link>
        </button>
      </section>
      <section className="vision" data-aos="flip-left">
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
