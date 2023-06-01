import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import '../Navbar/nav.css';

const Navbar = () => {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className='root-navbar'>
        <div className='nav'>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <ul className='uls'>
            <li className='link1'>
              <Link to='/' onClick={() => smoothScroll('#history')}>
                01. HISTORY
              </Link>
            </li>
            <li className='link1'>
              <Link to='/' onClick={() => smoothScroll('#team')}>
                02. TEAM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;