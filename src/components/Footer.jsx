import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>About Us</h3>
        <p>
          Cyber & AI Club functions to empower students with technological
          proficiency and leverage their potential in the field of Cyber & Ai,
          ultimately fostering innovation & progress.
        </p>
      </div>
      <div>
        <h3>Connect with Us</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100091347931622"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cyber_ai_ssuet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
