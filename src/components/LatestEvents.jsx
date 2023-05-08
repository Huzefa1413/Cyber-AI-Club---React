import React from 'react';

import { useLocation } from 'react-router-dom';

import Event from './Event';

const LatestEvents = () => {
  const location = useLocation();
  const latestevents = [
    {
      date: '3 May 2023',
      title: 'Seminar',
      text: 'Learn how AI can enhance your cyber security. Join our seminar with expert speakers discussing the latest developments and insights into effectively leveraging AI to protect your data. @ai_clubofficial',
      pic: './assets/Events/seminar.jpeg',
    },
    {
      date: '6 April 2023',
      title: 'Club Interviews',
      text: 'Things may come to those who wait, but only the things left by those who hustle✨✨ The interviews went off without any fuss!! Now cross the fingers and pray for the best❤️ #cs #it #ssuet #cyberaiclub',
      pic: './assets/Events/interview.jpeg',
    },
  ];
  return (
    <section
      id="latest-events"
      className={location.pathname === '/' ? 'latesteventhome' : ''}
    >
      <h1 className="sub-heading">Latest News and Events</h1>
      {latestevents.length <= 0 && (
        <h2 className="sub-heading2">No Events Lined Up..</h2>
      )}

      {latestevents.map((eachevent, i) => (
        <Event key={i} event={eachevent} />
      ))}
    </section>
  );
};

export default LatestEvents;
