import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-text.png";
import "../Navbar/navstick.css";

const NavbarStick = () => {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className="root-type">
        <div>
          <img src={Logo} />
        </div>

        <ul className="ulss">
          <li className="link2">
          <Link to='/' onClick={() => smoothScroll('#history')}>
                01. HISTORY
              </Link>
          </li>
          <li className="link2">
          <Link to='/' onClick={() => smoothScroll('#team')}>
                02. TEAM
              </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarStick;
