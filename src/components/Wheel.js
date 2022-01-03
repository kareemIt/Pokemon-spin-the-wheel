import React from 'react';
import './style.css';

const Wheel = ({ array, landed }) => {
  return (
    <div>
      <div className="mainbox">
        <div className="box">
          <div className="box1">
            <span className="span1">1</span>
            <span className="span2">2</span>
            <span className="span3">3</span>
          </div>
          <div className="box2">
            <span className="span1">4</span>
            <span className="span2">5</span>
            <span className="span3">6</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
