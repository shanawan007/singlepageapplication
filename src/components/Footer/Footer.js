 import React from 'react'
import pic44 from '../../assets/logo-footer.png'
import '../Footer/footer.css';

const Footer = () => {
  return (
    <div className='root-footer'>
        <div><img src={pic44}></img> </div>
        <div className='footer'>
           COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </div>
    </div>
  )
}

export default Footer