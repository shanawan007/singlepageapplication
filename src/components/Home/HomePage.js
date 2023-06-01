import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/home.css';
import '../Navbar/navstick.css';
import NavbarStick from '../Navbar/NavbarStick';
import logohero from '../../assets/01-history-text.png';
import Carousels from '../Carousel/Carousel';
import pic3 from '../../assets/02-climb-text.png';
import Climb from '../Climb/Climb';

const HomePage = () => {
  return (
    <>
      <div className='back'>
        <Navbar />
      </div>
      <div className='back2'>
        <NavbarStick />
      </div>
      <div className='back4' id="history">
        <div className='content'>
          <div className='releventThings'>
            <img src={logohero} alt="Logo Hero" />
          </div>
          <p className='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
          </p>
        </div>
        <Carousels />
      </div>
      <div>
        <Climb />
      </div>
    </>
  );
};

export default HomePage;