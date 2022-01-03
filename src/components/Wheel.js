import React from 'react';
import './style.css';

const Wheel = ({ array, landed }) => {
  return (
    <div>
      <div className="mainbox">
        <div className="box">
          <div className="box1">
            <span className="span1">
              <strong>1</strong>
            </span>
            <span className="span2">
              <strong>2</strong>
            </span>
            <span className="span3">
              <strong>3</strong>
            </span>
          </div>
          <div className="box2">
            <span className="span1">
              <strong>4</strong>
            </span>
            <span className="span2">
              <strong>5</strong>
            </span>
            <span className="span3">
              <strong>6</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
