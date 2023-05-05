import React from 'react';

import Event from './Event';

const UpcomingEvents = () => {
  const upcomingevents = [
    // {
    //   date: '16 Feb 2023',
    //   title: 'Seminar',
    //   text: 'epellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?HuzefaLorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Huzefa',
    //   pic: './assets/CYBER AI.png',
    // },
    // {
    //   date: '24 Feb 2023',
    //   title: 'Seminar',
    //   text: 'lorem ipsum data hdiajadi',
    //   pic: './assets/CYBER AI.png',
    // },
  ];
  return (
    <section id="upcoming-events">
        <h1 className="sub-heading">Upcoming Events</h1>
      {upcomingevents <= 0 && (
          <h2 className="sub-heading2">No Events Lined Up..</h2>
      )}
      {upcomingevents.map((eachevent, i) => (
        <Event key={i} event={eachevent} />
      ))}
    </section>
  );
};

export default UpcomingEvents;
