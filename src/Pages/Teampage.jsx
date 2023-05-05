import React from 'react';

import MemberCard from '../components/MemberCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Teampage = () => {
  const team = [
    {
      heading: 'Our Director',
      member: [
        {
          name: 'Dr Waleej Haider',
          pos: 'Director',
          pic: './assets/Team/director.jpeg',
        },
      ],
    },
    {
      heading: 'Our Presidents',
      member: [
        {
          name: 'Muhammad Jawwad',
          pos: 'President',
          pic: './assets/Team/president.jpeg',
        },
        {
          name: 'Muhammad Umer Amir',
          pos: 'Vice-President',
          pic: './assets/Team/vicepresident.jpeg',
        },
      ],
    },
    {
      heading: 'Our General Secretary',
      member: [
        {
          name: 'Daniyal Jameel',
          pos: 'General Secretary',
          pic: './assets/Team/generalsecretary.jpeg',
        },
      ],
    },
    {
      heading: 'Our Media Heads',
      member: [
        {
          name: 'Saim Rafi',
          pos: 'Media Head',
          pic: './assets/Team/mediahead1.jpeg',
        },
        {
          name: 'Javeria Ali',
          pos: 'Media Head',
          pic: './assets/Team/mediahead2.jpeg',
        },
      ],
    },
    {
      heading: 'Our Core Team Members',
      member: [
        {
          name: 'Muhammad Ahmed',
          pos: 'Core Team Member',
          pic: './assets/Team/coreteammember1.jpeg',
        },
        {
          name: 'Laiba Wajih',
          pos: 'Core Team Member',
          pic: './assets/Team/coreteammember2.jpeg',
        },
      ],
    },
    {
      heading: 'Our Event Planner',
      member: [
        {
          name: 'Hirah Siddiqui',
          pos: 'Event Planner',
          pic: './assets/Team/eventplanner.jpeg',
        },
      ],
    },
    {
      heading: 'Our Event Co-ordinators',
      member: [
        {
          name: 'Mir Wali Chandio',
          pos: 'Event Coordinator',
          pic: './assets/Team/eventcoordinator.jpeg',
        },
        {
          name: 'Fiza Butt',
          pos: 'Co-Event Coordinator',
          pic: './assets/Team/coeventcoordinator.jpeg',
        },
      ],
    },
    {
      heading: 'Our Web Developers',
      member: [
        {
          name: 'Huzefa Mustafa',
          pos: 'Lead Web Developer',
          pic: './assets/Team/leadwebdeveloper.jpeg',
        },
        {
          name: 'Syeda Zehra Batool',
          pos: 'Co-Lead Web Developer',
          pic: './assets/Team/coleadwebdeveloper.jpg',
        },
      ],
    },
    {
      heading: 'Our Graphic Designer',
      member: [
        {
          name: 'Syeda Mehak',
          pos: 'Lead Graphic Designer',
          pic: './assets/Team/graphicdesigner.jpeg',
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <section className="teamheading">
        <h1 className="sub-heading">Meet Our Team</h1>
      </section>
      {team.map((t, i) => (
        <section key={i}>
          <div className="container">
            <h2 className="teamsubheading">{t.heading}</h2>
            {t.member.map((eachmember, i) => (
              <MemberCard key={i} team={eachmember} />
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </>
  );
};

export default Teampage;
