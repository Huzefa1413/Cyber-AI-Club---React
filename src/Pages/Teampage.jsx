import React from 'react';
import MemberCard from '../components/MemberCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Teampage = () => {
  const presidents = [
    {
      name: 'Muhammad Jawwad',
      pos: 'President',
      pic: './assets/CYBER AI.png',
    },
    {
      name: 'Muhammad Umer Amir',
      pos: 'Vice-President',
      pic: './assets/CYBER AI.png',
    },
  ];
  const generalsecretary = [
    {
      name: 'Daniyal Jameel',
      pos: 'General Secretary',
      pic: './assets/generalsecretary.jpeg',
    },
  ];
  const mediaheads = [
    {
      name: 'Saim Rafi',
      pos: 'Media Head',
      pic: './assets/mediahead1.jpeg',
    },
    {
      name: 'Javeria Ali',
      pos: 'Media Head',
      pic: './assets/mediahead2.jpeg',
    },
  ];
  const coreteammembers = [
    {
      name: 'Muhammad Ahmed',
      pos: 'Core Team Member',
      pic: './assets/coreteammember1.jpeg',
    },
    {
      name: 'Laiba Wajih',
      pos: 'Core Team Member',
      pic: './assets/coreteammember2.jpeg',
    },
  ];
  const eventplanner = [
    {
      name: 'Hirah Siddiqui',
      pos: 'Event Planner',
      pic: './assets/eventplanner.jpeg',
    },
  ];
  const eventcoordinators = [
    {
      name: 'Mir Wali Chandio',
      pos: 'Event Coordinator',
      pic: './assets/eventcoordinator.jpeg',
    },
    {
      name: 'Fiza Butt',
      pos: 'Co-Event Coordinator',
      pic: './assets/coeventcoordinator.jpeg',
    },
  ];
  const webdevelopers = [
    {
      name: 'Huzefa Mustafa',
      pos: 'Lead Web Developer',
      pic: './assets/CYBER AI.png',
    },
    {
      name: 'Syeda Zehra Batool',
      pos: 'Co-Lead Web Developer',
      pic: './assets/CYBER AI.png',
    },
  ];
  const graphicdesigner = [
    {
      name: 'Syeda Mehak',
      pos: 'Lead Graphic Designer',
      pic: './assets/graphicdesigner.jpeg',
    },
  ];
  return (
    <>
      <Navbar />
      <section class="teamheading">
        <h1 class="sub-heading">Meet Our Team</h1>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Presidents</h2>
          {presidents.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our General Secretary</h2>
          {generalsecretary.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Media Heads</h2>
          {mediaheads.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Core Team Members</h2>
          {coreteammembers.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Event Planner</h2>
          {eventplanner.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Event Co-ordinators</h2>
          {eventcoordinators.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Web Developers</h2>
          {webdevelopers.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Graphic Designer</h2>
          {graphicdesigner.map((eachmember, i) => (
            <MemberCard key={i} team={eachmember} />
          ))}
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="teamsubheading">Our Team Members</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Teampage;
