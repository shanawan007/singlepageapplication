import React from "react";
import pic3 from "../../assets/02-climb-text.png";
import "../Climb/climb.css";
import { Link } from "react-router-dom";
import Tabbing from "../Tabs/Tab";
import Mountains from "../Mountains/Mountains";
import Footer from "../Footer/Footer";

const Climb = () => {
    
  return (
    <div className="pad" id="team">
      <div className="upper">
      <div className="next">
        <img src={pic3}></img>
      </div>
      <div className="para"><p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p></div>
      </div>
      <Tabbing />
      <Footer />
    </div>
  );
};

export default Climb;
