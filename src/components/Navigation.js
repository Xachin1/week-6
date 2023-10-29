import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <>
      <section id='nav__background'>
        <nav>
          <Link to='/'>
            <img
              className='logo animate__animated animate__backInLeft'
              src={logo}
              alt='logo'
            />
          </Link>
          <ul className='nav__links animate__animated animate__backInLeft'>
            <li>
              <a href='/' className='nav__link link__hover-effect'>
                Home
              </a>
            </li>
            <li>
              <a href='/' className='nav__link link__hover-effect '>
                Find your movie
              </a>
            </li>
            <li>
              <a href='/' className='nav__link link__hover-effect no__cursor'>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
