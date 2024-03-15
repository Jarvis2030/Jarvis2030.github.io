import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lin Yu-Chun, June</h2>
        <p><a href="mailto:June9181628@gmail.com">June9181628@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m June. I am a Undergraduated from <a href="https://hkust.edu.hk/">Hong Kong University of Scinece and Technology</a> ,
        and the Branch coordinator in <a href="https://www.instagram.com/remake.repair/">REMAKE repair team</a>.
        I am currently working at
        {' '}<a href="https://sengital.com/hk/career/">Sengital Limited</a>  as an AI R&D intern.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lin Yu-Chun, June.</p>
    </section>
  </section>
);

export default SideBar;
