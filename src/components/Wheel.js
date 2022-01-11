import React from 'react';
import './style.css';

const Wheel = ({ array, landed }) => {
  return (
    <div>
      <div>
        {array.map((letter, index) => {
          return (
            <div className={'col ' + index} key={index}>
              {letter.split('').map((letter, index) => (
                <span className="letter-in">{letter}</span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Wheel;
