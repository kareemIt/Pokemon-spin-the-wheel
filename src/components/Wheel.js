import React from 'react';
import './style.css';

const Wheel = ({ array, landed }) => {
  return (
    <div>
      <div className="mainbox">
        <div className="box">
          <div className="box1">
            <span className="span1">
              <strong>{array[0]}</strong>
            </span>
            <span className="span2">
              <strong>{array[1]}</strong>
            </span>
            <span className="span3">
              <strong>{array[2]}</strong>
            </span>
            <span className="span4">
              <strong>{array[3]}</strong>
            </span>
          </div>
          <div className="box2">
            <span className="span1">
              <strong>{array[4]}</strong>
            </span>
            <span className="span2">
              <strong>{array[5]}</strong>
            </span>
            <span className="span3">
              <strong>{array[6]}</strong>
            </span>
            <span className="span4">
              <strong>{array[7]}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
