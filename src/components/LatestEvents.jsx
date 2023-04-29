import React from 'react';

import { useLocation } from 'react-router-dom';

import Event from './Event';

import Fade from 'react-reveal/Fade';

const LatestEvents = () => {
  const location = useLocation();
  const latestevents = [
    {
      date: '6 April 2023',
      title: 'Club Interviews',
      text: 'Things may come to those who wait, but only the things left by those who hustle✨✨ The interviews went off without any fuss!! Now cross the fingers and pray for the best❤️ #cs #it #ssuet #cyberaiclub',
      pic: './assets/Events/interview.jpeg',
    },
    // {
    //   date: '8 Feb 2023',
    //   title: 'Seminar',
    //   text: 'lorem ipsum data hdiajadi',
    //   pic: './assets/CYBER AI.png',
    // },
  ];
  return (
    <section
      id="latest-events"
      className={location.pathname === '/' ? 'latesteventhome' : ''}
    >
      <Fade top>
        <h1 className="sub-heading">Latest News and Events</h1>
      </Fade>
      {latestevents.length <= 0 && (
        <Fade top>
          <h2 className="sub-heading2">No Events Lined Up..</h2>
        </Fade>
      )}

      {latestevents.map((eachevent, i) => (
        <Event key={i} event={eachevent} />
      ))}
    </section>
  );
};

export default LatestEvents;
