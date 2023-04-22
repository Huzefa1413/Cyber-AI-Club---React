import React from 'react';
import { useLocation } from 'react-router-dom';

import Event from './Event';

const LatestEvents = () => {
  const location = useLocation();
  const latestevents = [
    {
      date: '10 Feb 2023',
      title: 'Seminar',
      text: 'epellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?HuzefaLorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Huzefa',
      pic: './assets/CYBER AI.png',
    },
    {
      date: '8 Feb 2023',
      title: 'Seminar',
      text: 'lorem ipsum data hdiajadi',
      pic: './assets/CYBER AI.png',
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
