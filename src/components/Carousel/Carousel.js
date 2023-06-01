import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assets/slide1.jpg'
import pic2 from '../../assets/slide2.jpg' 
import '../Carousel/carousel.css'

function Carousels() {
  return (
   <div className='blue'>
 <Carousel className='abc'>
      <Carousel.Item interval={1000}>  
      <div className='def'>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='def'>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='def'>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        /></div>
        <div className='ghi'> <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
        /></div>
      </div>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Carousels;