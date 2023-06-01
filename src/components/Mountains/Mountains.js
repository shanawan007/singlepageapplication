import React from "react";
import "../Mountains/mountain.css";

const Mountains = () => {
  return (
    <div className="root-mountain">
      <div className="schedule">
        <h1>Schedule</h1>
        <div className="dateandvenue">
          <span>25 Nov 2016</span>
          <span>Vestibulum viverra</span>
        </div>
        <div className="dateandvenue">
          <span>28 Nov 2016</span>
          <span>Vestibulum viverra</span>
        </div>
        <div className="dateandvenue">
          <span>18 Dec 2016</span>
          <span>Vestibulum viverra</span>
        </div>
        <div className="dateandvenue">
          <span>7 Jan 2017</span>
          <span>Vestibulum viverra</span>
        </div>
      </div>
    </div>
  );
};

export default Mountains;
